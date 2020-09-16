const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const databaseUrl = 'mongodb://localhost:27017/node-laba';
const app = express();

app.use(require('body-parser').json());

require('./api/endpoints')(app, db);

MongoClient.connect(databaseUrl, (err, db) => {
    if (err) throw err;

    const dbo = db.db("node-laba");
    uploadData(dbo);

    app.listen(3333, () => {
        console.log('ready to test broo');
    });
})

function uploadData(dbo) {
    const bookFixtures = require('./fixtures/book-fixtures');
    const carFixtures = require('./fixtures/car-fixtures');

    dbo.collection("books").insertMany(bookFixtures.books, function(err, result) {
        if (err) throw err;
        console.log("Number of documents inserted: " + result.insertedCount);
    });

    dbo.collection("cars").insertMany(carFixtures.cars, function(err, result) {
        if (err) throw err;
        console.log("Number of documents inserted: " + result.insertedCount);
    });
}