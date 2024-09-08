// server.js
const express = require('express');
const WebSocket = require('ws');
const cors = require('cors');
const db = require('./database');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/team', (req, res) => {
    const { name } = req.body;
    db.run("INSERT INTO teams (name) VALUES (?)", [name], function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const newTeam = { id: this.lastID, name };
      res.json(newTeam);
  
      // Notify all WebSocket clients about the new team
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'NEW_TEAM', team: newTeam }));
        }
      });
    });
  });

// API route to get all teams
app.get('/api/teams', (req, res) => {
    db.all("SELECT * FROM teams", [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ teams: rows });
    });
  });

// WebSocket Server
const wss = new WebSocket.Server({ server: app.listen(port, () => console.log(`Server running on port ${port}`)) });

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    console.log(`Received: ${message}`);
  });

  ws.send('Welcome to the WebSocket server!');
});

