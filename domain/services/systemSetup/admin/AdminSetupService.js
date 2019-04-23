const UserRepository = require('../../../../repositories/admin/UserRepository');
const adminConfig = require('./admin');
const BaseService = require('../../BaseService');
module.exports = class AdminSetupService extends BaseService {

    constructor() {
        super()
    }

    static create() {
        return new AdminSetupService();
    }

    async setup() {
        const userRepository = new UserRepository(this.connection);
        const count = await userRepository.count({})
        if (count == 0) {
            let adminData = adminConfig;
            for (let admin of adminData) {
                const adminObj = await userRepository.add(admin)
                adminObj.save();
            }
        }
        await this.closeConnection();
    }
}