const UserRepository = require('../../../repositories/admin/UserRepository')
const httpError = require('standard-http-error');
const BaseUseCase = require('../../BaseUseCase');
module.exports = class AuthUseCase extends BaseUseCase {

    constructor(req, res) {
        super();
        this.req = req
        this.res = res
    }

    static create(req, res) {
        return new AuthUseCase(req, res);
    }

    async execute() {
        try {
            await this.changeDbConnection('mySchools');
            const userRepository = new UserRepository(this.connection);
            const { email, password } = this.req.body;
            const user = await userRepository.findOne({ email, password })

            if (user === null) {
                throw new httpError(404, "Incorrect Password/Email")
            }
            await this.closeConnection();
            this.res.status(200).json(user)
        } catch (err) {
            console.log('-------------------')
            console.log(err)
            if (err.code) {
                this.res.status(err.code).json({
                    code: err.code,
                    message: err.message
                })
            } else {
                this.res.status(err.code).json({
                    code: 400,
                    message: err.message
                })
            }
        }
    }
}