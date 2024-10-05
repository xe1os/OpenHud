import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'], 
    },
});

app.use(cors());

app.use(express.static('build'));

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

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.emit('update', { data: 'Initial data from server' });
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

app.post('/gsi', express.json(), (req, res) => {
    let data = req.body;
    fixGSIData(data)
    io.emit('update', data);
    // console.log(data);clear
    res.sendStatus(200);
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));