const router = require('express').Router();
const AddSchoolUseCase = require('./AddSchoolUseCase');

router.post('/schools', (request, response) => {
    const addSchoolUseCase = AddSchoolUseCase.create(request, response);
    addSchoolUseCase.execute();
})

module.exports = router;