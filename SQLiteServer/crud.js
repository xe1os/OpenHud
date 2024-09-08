const db = require('./database');

const createTeam= (name, callback) => {
    const sql = `INSERT INTO teams (name) VALUES (?)`
    db.run(sql, [name], function(err) {
        callback(err, {id: this.lastID});
    });
}

const readTeams = (callback) => {
    const sql = `SELECT * FROM teams`;
    db.all(sql, [], callback);
}

const updateTeam = (id, name, callback) => {
    const sql = `UPDATE teams SET name = ? WHERE id = ?`;
    db.run(sql, [name, id], callback);
}

const deleteTeam = (id, callback) => {
    const sql = `DELETE FROM teams WHERE id = ?`;
    db.run(sql, id, callback);
}


module.exports = {createTeam, readTeams, updateTeam, deleteTeam};