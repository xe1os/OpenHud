// database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE teams (id INTEGER PRIMARY KEY, name TEXT)");
  db.run("CREATE TABLE players (id INTEGER PRIMARY KEY, name TEXT, team_id INTEGER, FOREIGN KEY (team_id) REFERENCES teams(id))");
});

module.exports = db;
