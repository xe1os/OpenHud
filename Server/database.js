import sqlite3 from 'sqlite3';
const database = 'Database.db';

export let db = new sqlite3.Database(database, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
    db.run(`CREATE TABLE IF NOT EXISTS players(id INTEGER PRIMARY KEY,alias,steam_id,team,real_name,country,avatar,last_updated)`, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Players Table Ready.');
    });
});

