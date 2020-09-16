module.exports = function(app, database) {

    app.post('/car', (req, res) => {
        const car = {
            color: req.body.color,
            price: req.body.price,
            category: req.body.category
        };
        database.collection('car').insert(car, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result.ops[0]);
            }
        });
    })

    app.get('/car/:id', (req, res) => {
        const ObjectID = require('mongodb').ObjectID;
        const id = req.params.id;
        const query = { '_id': new ObjectID(id) };
        database.collection('car').findOne(query, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });

    app.put('/car/:id', (req, res) => {
        const ObjectID = require('mongodb').ObjectID;
        const id = req.params.id;
        const query = { '_id': new ObjectID(id) };
        const body = {
            color: req.body.color,
            price: req.body.price,
            category: req.body.category
        };
        database.collection('car').update(query, body, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });

    app.delete('/car/:id', (req, res) => {
        const ObjectID = require('mongodb').ObjectID;
        const id = req.params.id;
        const query = { '_id': new ObjectID(id) };
        database.collection('car').remove(query, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });
};
