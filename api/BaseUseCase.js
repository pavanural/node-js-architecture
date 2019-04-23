const mongoose = require('mongoose');
const dbAccess = require('./../schema/dbAccess');
module.exports = class BaseUseCase {
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
    }
    creatConnection() {
        console.log('readyyyyyyyy',mongoose.connection.readyState)
        if (mongoose.connection.readyState == 0) {
            console.log(this.dbName)
            this.connection = dbAccess.on(this.dbName)
        }
    }

    closeConnection() {
        mongoose.connection.close();
    }

    executeAndHandleError(request, response) {
        request.headers.authorization
        this.dbName = dbName;
        this.creatConnection()
        this.execute();
        this.connection.close()
        this.res.status(200).json(user)
    }
}