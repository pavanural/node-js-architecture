const mongoose = require('mongoose');
const dbAccess = require('./../schema/dbAccess');
module.exports = class BaseRepository {
    constructor() {
        this.dbName = 'mySchools';
        this.connection = dbAccess;
    }

    changeDbConnection(dbName) {
        this.dbName = dbName;
        if (mongoose.connection.readyState == 1) {
            mongoose.connection.close();
        }
        this.creatConnection();
        console.log(this.dbName)
    }
    creatConnection() {
        if (mongoose.connection.readyState == 0) {
            console.log(this.dbName)
            this.connection = dbAccess.on(this.dbName)
        }
    }
}