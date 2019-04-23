const mongoose = require('mongoose');

const SchoolSideMenuSchema = mongoose.Schema({
    menuName: {type: String, required: true},
    createdBy: {type: String, required: true, ref: 'User'}
})

module.exports = mongoose.model('SchoolSideMenu', SchoolSideMenuSchema);