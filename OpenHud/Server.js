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

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.emit('update', { data: 'Initial data from server' });
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

app.post('/gsi', express.json(), (req, res) => {
    const data = req.body;
    io.emit('update', data);
    res.sendStatus(200);
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));