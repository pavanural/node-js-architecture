const SchoolRepository = require('../../../repositories/admin/SchoolRepository');
const BaseUseCase = require('../../BaseUseCase');
const SchoolSetupService = require('../../../domain/services/SchoolSetupService');
module.exports = class AddSchoolUseCase extends BaseUseCase {
    constructor(request, response) {
        super();
        this.request = request;
        this.response = response;
    }

    static create(request, response) {
        return new AddSchoolUseCase(request, response);
    }

    async execute() {
        try {
            const schoolRepository = new SchoolRepository(this.connection);
            const school = await schoolRepository.add(this.request.body);
            await school.save()
            this.connection.close();
            console.log(school.schoolCode);
            await this.changeDbConnection(school.schoolCode);
            const schoolSetupService = SchoolSetupService.create(this.connection).setup(
                {
                    name: 'Vish',
                    email: "vish@gmail.com",
                    password: '123456',
                    phone: ''
                }
            );
            this.response.status(200).json({ code: 200, message: 'School Added Successfully' })
        } catch (error) {
            this.response.status(400).json({ code: 400, message: error.message })
        }
    }
}