
const loginController = require('../controller/login.controller')

const cors = require('cors')

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

module.exports = (app)=>{
   // app.post('/login',cors(corsOptions), loginController.login)
    app.post('/login', loginController.login)
    app.post('/signup', loginController.create)
}