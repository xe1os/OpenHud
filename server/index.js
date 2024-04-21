const express = require('express');
const app = express();
const http = require("http");
const { Server } = require('socket.io');
const cors = require("cors");

app.use(cors());


app.post('/', (request, response) => {
    
    var body = '';
    request.on('data', function (data) {
        body += data;
    });

    request.on('end', function () {
        console.log("POST payload: " + body);
        io.emit('post_received', body);
        response.end('');
    });
});


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],

    }
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data);
    })
});

server.listen(3001, () => {
    console.log("Server is running");
});