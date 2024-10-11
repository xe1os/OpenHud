import { db } from "./database.js";

export const createPlayer = (alias, steam_id, team, real_name, country, avatar, last_updated, callback) => {
    const sql = `INSERT INTO players(alias,steam_id,team,real_name,country,avatar,last_updated) VALUES(?,?,?,?,?,?,?)`;
    db.run(sql, [alias, steam_id, team, real_name, country, avatar, last_updated], function(err) {
        callback(err, { id: this.lastID });
        if (err) {
            console.error(err.message);
        }
    });
};

export const readPlayers = (callback) => {
    const sql = `SELECT * FROM players`;
    db.all(sql, [], (err, rows) => {
        callback(err, rows);
        if (err) {
            return console.error(err.message);
        }
    });
};

export const updatePlayer = (id, alias, steam_id, team, real_name, country, avatar, last_updated, callback) => {
    const sql = `UPDATE players SET alias = ?, steam_id = ?, team = ?, real_name = ?, country = ?, avatar = ?, last_updated = ? WHERE id = ?`;
    db.run(sql, [alias, steam_id, team, real_name, country, avatar, last_updated, id], function(err) {
        callback(err);
        if (err) {
            return console.error(err.message);
        }
    });
};

export const deletePlayer = (id, callback) => {
    const sql = `DELETE FROM players WHERE id = ?`;
    db.run(sql, [id], (err) => {
        callback(err);
        if (err) {
            return console.error(err.message);
        }
    });
};

export const getPlayerBySteamId = (steam_id, callback) => {
    const sql = `SELECT * FROM players WHERE steam_id = ?`;
    db.get(sql, [steam_id], (err, row) => {
        callback(err, row);
        if (err) {
            return console.error(err.message);
        }
        // console.log("Player sent: ", row);
    });
};

export const createTeam = (name, shortName, logo, country, last_updated, callback) => {
    const sql = `INSERT INTO teams(name,shortName,logo,country,last_updated) VALUES(?,?,?,?,?)`;
    db.run(sql, [name, shortName, logo, country, last_updated], function(err) {
        callback(err, { id: this.lastID });
        if (err) {
            console.error(err.message);
        }
    });
};

export const readTeams = (callback) => {
    const sql = `SELECT * FROM teams`;
    db.all(sql, [], (err, rows) => {
        callback(err, rows);
        if (err) {
            return console.error(err.message);
        }
    });
};

export const updateTeam = (id, name, shortName, logo, country, last_updated, callback) => {
    const sql = `UPDATE teams SET name = ?, shortName = ?, logo = ?, country = ?, last_updated = ? WHERE id = ?`;
    db.run(sql, [name, shortName, logo, country, last_updated, id], function(err) {
        callback(err);
        if (err) {
            return console.error(err.message);
        }
    });
};

export const deleteTeam = (id, callback) => {
    const sql = `DELETE FROM teams WHERE id = ?`;
    db.run(sql, [id], (err) => {
        callback(err);
        if (err) {
            return console.error(err.message);
        }
    });
};

export const getTeamByName = (name, callback) => {
    const sql = `SELECT * FROM teams WHERE name = ?`;
    db.get(sql, [name], (err, row) => {
        callback(err, row);
        if (err) {
            return console.error(err.message);
        }
    });
};

export const createMatch = (current, left, right, matchType, vetos, callback) => {
    const sql = `INSERT INTO matches(current,left,right,matchType,vetos) VALUES(?,?,?,?,?)`;
    db.run(sql, [current, left, right, matchType, vetos], function(err) {
        callback(err, { id: this.lastID });
        if (err) {
            console.error(err.message);
        }
    });
};

export const readMatches = (callback) => {
    const sql = `SELECT * FROM matches`;
    db.all(sql, [], (err, rows) => {
        callback(err, rows);
        if (err) {
            return console.error(err.message);
        }
    });
};

export const updateMatch = (id, current, left, right, matchType, vetos, callback) => {
    const sql = `UPDATE matches SET current = ?, left = ?, right = ?, matchType = ?, vetos = ? WHERE id = ?`;
    db.run(sql, [current, left, right, matchType, vetos, id], function(err) {
        callback(err);
        if (err) {
            return console.error(err.message);
        }
    });
};

export const deleteMatch = (id, callback) => {
    const sql = `DELETE FROM matches WHERE id = ?`;
    db.run(sql, [id], (err) => {
        callback(err);
        if (err) {
            return console.error(err.message);
        }
    });
};

export const getMatchById = (id, callback) => {
    const sql = `SELECT * FROM matches WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
        callback(err, row);
        if (err) {
            return console.error(err.message);
        }
    });
};