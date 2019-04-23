const router = require('express').Router();
const AddSchoolSideMenuUseCase = require('./AddSchoolSideMenuUseCase');

router.post('/school-side-menus', async (request, response, next) => {
    const addSchoolSideMenuUseCase = AddSchoolSideMenuUseCase.create(request, response);
    await addSchoolSideMenuUseCase.execute();
})

module.exports = router;