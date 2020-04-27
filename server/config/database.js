const Datastore = require('nedb');
let db = {};

if(!db.user && !db.note) {
    db.note = new Datastore({filename: 'note.db' });
    db.user = new Datastore({filename: 'user.db'});
    db.note.loadDatabase();
    db.user.loadDatabase();
    console.log('Database initializaed successfull.')
}

module.exports = db;
