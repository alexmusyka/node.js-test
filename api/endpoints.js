const apiBooks = require('./modules/books');
const apiCar = require('./modules/car');

module.exports = function(app) {
    apiBooks(app);
    apiCar(app);
};