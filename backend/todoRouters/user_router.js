const express = require('express')
const user_controller= require('../controller/user_controller')

// Router
exports.router = ( ()=> {
    var userRoute = express.Router()
    // post(user_controller)


    // // user routes
    userRoute.post('/user/register/',(res,req) => {user_controller.register(req.body)
    
        res.setEncoding('complete')
    })
    userRoute.route('/users/login/').post(user_controller)
    
    return userRoute;
})();

// apiRouter.route('/users/register/').post(user_controller)

// module.exports = apiRouter