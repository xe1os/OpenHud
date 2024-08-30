
const express = require('express');
const cors = require('cors');
const { WebSocketServer } = require('ws');

const app = express();
const port = 3001;
// const GSI = new CSGOGSI;

app.use(express.json());
app.use(cors());

// HTTP routes
app.get('/', (request, response) => {
    response.send("Hello world!");
});

app.post('/', (req, res) => {
    // console.log(req.body);
    // GSI.digest(req.body);

    wss.clients.forEach(client => {
        if(client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(req.body))
        }
    })

    res.status(200).json({ message: "received data!", id: 1 });
});

// Create an HTTP server and attach Express app
const httpServer = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Create a WebSocket server
const wss = new WebSocketServer({ server: httpServer });

// Handle WebSocket connections
wss.on('connection', (ws) => {
    console.log('Client connected via WebSocket');

    // Handle messages from the client
    ws.on('message', (message) => {
        console.log('Received message:', message);

        // Send a message back to the client
        ws.send('Message received: ' + message);
    });

    // Handle client disconnections
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
