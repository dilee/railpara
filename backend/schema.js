var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/railpaara';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    createCollection(db, 'users');
    // dropCollection(db, 'users');


    db.close();
});

var createCollection = function (db, collectionName) {
    // Get the documents collection
    var collection = db.collection(collectionName);
    // Insert some documents
    collection.createIndex({ "email": "text" }, { unique: true });
};

var dropCollection = function (db, collectionName) {
    // Get the documents collection
    // Insert some documents
    var collection = db.collection('users');
    collection.drop();
};