const sqlite3 = require('sqlite3').verbose();
const dataBaseName = 'OpenHud.db';

let db = new sqlite3.Database(dataBaseName, (err) => {
    if(err){
        console.error(err.message);
    }
    else {
        console.log("Connected to Data Base");
        db.run('CREATE TABLE IF NOT EXISTS teams (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)', (err) => {
            if (err) {
                console.error(err.message);
            }
            else {
                console.log("Table created or existed");
            }
        })
    }
})

module.exports = db;