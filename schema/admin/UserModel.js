const Schema = require('mongoose').Schema;

const getSchema = (connection) => {
    const UserSchema = new Schema({
        name: { type: String },
        email: { type: String, lowercase: true },
        password: { type: String, select: false },
        phone: { type: String }
    })

    return connection.model('User', UserSchema)
}

module.exports = getSchema