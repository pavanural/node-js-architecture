const SchoolSideMenuRepository = require('../../../repositories/admin/SchoolSideMenuRepository');

module.exports = class AddSchoolSideMenuUseCaseUseCase {
    constructor(request, response) {
        this.request = request;
        this.response = response;
    }

    static create(request, response) {
        return new AddSchoolSideMenuUseCaseUseCase(request, response);
    }

    async execute() {
        try {
            const schoolSideMenuRepository = new SchoolSideMenuRepository();
            const { menuName, createdBy } = this.request.body;
            const menu = await schoolSideMenuRepository.add({ menuName, createdBy });
            const savedMenu = await menu.save()
            console.log(savedMenu)
            this.response.status(200).json({ code: 200, message: 'Menu added successfully.' })
        } catch (error) {
            this.response.status(400).json({code: 400, message: error.message})
        }
    }
}