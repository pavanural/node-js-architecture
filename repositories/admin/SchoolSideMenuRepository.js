const SchoolSideMenuModel = require('../../schema/admin/SchoolSideMenuModel');

module.exports = class SchoolSideMenuRepository {
    constructor() {

    }

    model() {
        return SchoolSideMenuModel;
    }

    async add(info) {
        const model = this.model();
        const obj = await new model(info);
        return obj;
    }

    async find(predicate) {
        const model = await this.model().find(predicate);
        return model;
    }

    async findOne(predicate) {
        const model = await this.model().findOne(predicate);
        return model;
    }
}