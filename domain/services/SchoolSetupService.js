const UserRepository = require('../../repositories/school/UserRepository');
module.exports = class SchoolSetupService {

    constructor(connection) {
        this.connection = connection;
    }

    static create(connection) {
        return new SchoolSetupService(connection);
    }

    async setup(requestObj) {
        const userRepository = new UserRepository(this.connection);
        const teacherObj = await userRepository.add(requestObj);
        const teacher = await teacherObj.save();
        console.log(teacher)
    }
}