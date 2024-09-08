const express = require('express');
const {createTeam, readTeams, updateTeam, deleteTeam} = require('./crud');
const app = express();

app.use(express.json());

app.get('/teams', (req, res) => {
    readTeams((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json(rows);
        }
    })
})

app.post('/teams', (req,res) => {
    const {name} = req.body;
    createTeam(name, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).send(`Team added with id: ${data.id}`);
        }
    })
})

app.put('/teams/:id', (req,res) => {
    const {name} = req.body;
    updateTeam(req.params.id, name, (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).send(`Team updated with id: ${data.id}`);
        }
    })
})

app.delete('/teams/:id', (req, res) => {
    deleteTeam(req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).send(`Deleted team with id: ${data.id}`);
        }
    })
})


app.listen(3000, () => {
    console.log("Server is running")
})