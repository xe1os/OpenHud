import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import * as Players from './crud.js';

const app = express();
const server = http.createServer(app);

const HOST = 'localhost';
const PORT = 4000;

// Create a new instance of the socket.io server to send real time updates to the client
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'], 
    },
});

// Use the middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());
app.use(express.json());

// As of 10/07/2024, the GSI data has a bug where the observer_slots are off by 1, so we need to fix it before sending it to the client
const fixGSIData = (data) => {
    if (data.player) {
        data.player.observer_slot = data.player.observer_slot === 9 ? 0 : data.player.observer_slot + 1;
    }

    if (data.allplayers) {
        for (const playerId in data.allplayers) {
            if (data.allplayers.hasOwnProperty(playerId)) {
                data.allplayers[playerId].observer_slot = data.allplayers[playerId].observer_slot === 9 ? 0 : data.allplayers[playerId].observer_slot + 1;
            }
        }
    }
};

// Listen for the client connection and disconnection events
// Emit the 'update' event to send the game data to the client when the client connects
io.on('connection', (socket) => {
    console.log('Client connected');
    socket.emit('update', { data: 'Initial data from server' });
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Listen for the game data POST requests to /gsi
app.post('/gsi', express.json(), (req, res) => {
    let data = req.body;
    fixGSIData(data)
    io.emit('update', data);
    res.sendStatus(200);
});

app.get('/players', (req, res) => {
    // GET a player
    Players.readPlayers((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).send(rows);
            console.log("Players sent");
        }
    });
});

app.post('/players', (req, res) => {
    // POST a player
    const { alias, steam_id, team, real_name, country, avatar } = req.body;
    Players.createPlayer(alias, steam_id, team, real_name, country, avatar, Date.now(), (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(201).send(`Player added, ID: ${data.id}`);
            console.log(`Player added, ID: ${data.id}`);
        }
    });

});

app.put('/players/:id', (req, res) => {
    // UPDATE a player
    const { alias, steam_id, team, real_name, country, avatar } = req.body;
    Players.updatePlayer(req.params.id, alias, steam_id, team, real_name, country, avatar, Date.now(), (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(201).send(`Player added, ID: ${"Updated Player"}`);
            console.log(`Updated Player with ID: ${req.params.id}`);
        }
    })
});

app.delete('/players/:id', (req, res) => {
    // DELETE a player
    Players.deletePlayer(req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(201).send(`Deleted Player`);
            console.log(`Deleted Player with ID: ${req.params.id}`);
        }
    });
});

app.get('/players/:steam_id', (req, res) => {
    // GET a player by steam_id
    Players.getPlayerBySteamId(req.params.steam_id, (err, row) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (!row) {
            res.send(null);
            // console.log(`Player with steam_id: ${req.params.steam_id} not found`);
        }
        else {
            res.status(200).send(row);
            // console.log(`Player with steam_id: ${req.params.steam_id} sent`);
        }
    });
});



// Export the app and io instances for testing
export { app, io, server };


server.listen(PORT, () => console.log(`Server running on port ${HOST}:${PORT}`));