const BaseRepository = require('../BaseRepository');
const UserModel = require('../../schema/school/UserModel');

module.exports = class UserRepository extends BaseRepository {
    constructor(connection) {
        super();
        this.connection = connection;
    }

    model() {
        return UserModel(this.connection);
    }

    add(info) {
        const model = this.model();
        const obj = new model(info);
        return obj;
    }

    async count(info) {
        const model = this.model();
        const count = await model.countDocuments(info)
        return count;
    }

    async find(predicate) {
        const model = await this.model().find(predicate)
        return model
    }   
    
    async findOne(predicate) {
        const model = await this.model().findOne(predicate)
        return model
    }
}