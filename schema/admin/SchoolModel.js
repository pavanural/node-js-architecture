const Schema = require('mongoose').Schema;

const getSchema = (connection) => {
    const SchoolSchema = new Schema({
        schoolName: {type: String, required: true},
        schoolLogo: {type: String, required: true},
        principalEmailId: {type: String, required: true},
        adminitratorEmailId: {type: String, required: true},
        schoolCode: {type: String, required: true},
        menuList: [{type: String, required: true, ref: 'SchoolSideMenu'}]
    })

    return connection.model('School', SchoolSchema)
}

module.exports = getSchema