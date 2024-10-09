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