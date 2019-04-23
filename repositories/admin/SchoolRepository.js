const SchoolModel = require('../../schema/admin/SchoolModel');
module.exports = class SchoolRepository {
    constructor(connection) {
        this.connection = connection;
    }

    model() {
        return SchoolModel(this.connection);
    }

    add(info) {
        const model = this.model();
        const schoolObj = new model(info);
        return schoolObj;
    }
}