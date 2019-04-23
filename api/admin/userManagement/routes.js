const router = require('express').Router()
const AuthUseCase = require('./AuthUseCase')

router.post('/auth', async (req, res, next) => {
    let usecase = AuthUseCase.create(req, res)
    await usecase.execute()
})


module.exports = router;