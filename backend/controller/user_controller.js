var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var models = require('../models')

//routes
module.exports = () => {
    // register:(req,res)=>
    register: (req, res) => {

        // params 
        var name = req.body.u_name
        var email = req.body.u_email
        var password = req.body.password

        if (email == null || name == null || password == null) {
            return res.status(400).json({ 'error': 'missing parameters' })
        }


        //    vrify user's info//
        models.user.findOne({
            attributes: ['email'],
            where: { email: email }
        })
            .then(function (userFound) {
                console.log(hello);
                if (!userFound) {

                    bcrypt.hash(password, 5, (err, bcryptedPassword) => {
                        var newUser = model.User.create({
                            u_name: name,
                            u_email: email,
                            password: bcryptedPassword
                        })
                            .then((newUser) => {
                                return res.status(200).json({
                                    'userId': newUser.id
                                })
                            })
                            .catch((newUser) => {
                                return res.status(500).json({
                                    'error': 'cannot connect to user'
                                })
                            })
                    })
                } else {
                    return res.status(409).json({ 'error': 'user already exist' })
                }
            })
            .catch((err) => {
                return res.status(500).json({ 'error': 'unable to verify user' })
            })
    }

    login: (req, res) => { }
    // login:function(req,res)=>{}
}