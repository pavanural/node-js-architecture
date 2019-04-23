module.exports = class DbDetail {

    constructor() {
        this.dbName = 'mySchools';
    }

    static getDbName() {

        return new DbDetail().dbName;
    }

    static addDbName(dbName) {
        this.dbName = dbName;
    }
}