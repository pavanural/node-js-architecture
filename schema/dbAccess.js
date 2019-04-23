const mongoose = require('mongoose');


const createConnection = (code) => {
    console.log('entry to connection')
    console.log(mongoose.connection.readyState);
    return mongoose.createConnection(`mongodb://localhost:27017/${code}`, { useNewUrlParser: true });
}

module.exports = createConnection('mySchools');

module.exports.on = createConnection;