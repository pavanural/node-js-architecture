const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AdminSetupService = require('./domain/services/systemSetup/admin/AdminSetupService');
const AuthUseCaseRoutes = require('./api/admin/userManagement/routes');
const SchoolSideMenuUseCaseRoutes = require('./api/admin/schoolSideMenuUseCase/routes');
const SchoolUseCaseRoutes = require('./api/admin/schoolUseCase/routes');

const app = express();

// mongoose.Promise = global.Promise;
// console.log(mongoose.connection.readyState)
// mongoose.connect('mongodb://localhost:27017/mySchools', {
//     useNewUrlParser: true,
//     keepAlive: true
// });
// mongoose.connection.on('connected', () => {
//     console.log('Connected to db')
// })

// mongoose.connection.on('error', (err) => {
//     console.log('Not connected to db', err)
// })

// mongoose.connection.on('disconnected', () => {
//     console.log('Disconnected db')
// })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
});

app.use('/api/admin', AuthUseCaseRoutes);
app.use('/api/admin', SchoolSideMenuUseCaseRoutes);
app.use('/api/admin', SchoolUseCaseRoutes);


serverInitiate = async () => {
    console.log(`listening port ${port}...`)
    await AdminSetupService.create().setup()

}


const port = process.env.PORT || 3000;
app.listen(port, () => serverInitiate())