
const Joi = require('@hapi/joi')
const UserModel = require('../models/user.model')

// const loginSchema = Joi.object({
//     username: Joi.string().required().min(6).username,
//     password: Joi.string().required().min(6)
// })



exports.login = async (req, res) => {
    console.log('Request body is: ', req.body)
    const payload = req.body
    console.log('payload is: ', payload)
    const user = await UserModel.findOne({
        username: req.body.username
    })
    console.log('first result --- user found is: ', user)
    if (!user) {
        return res.status(400).send({
            message: "Incorrect username"
        })
    }
    else if (user.password === req.body.password) {
        console.log('user found is: ', user)
        return res.status(200).json({
            "message": "Successfully logged in",
            "user":user
        })
    } else {
        return res.status(400).send({
            message: "Incorrect password"
        })
    }
}

exports.create = async (req,res)=>{
    console.log("About creating new user... Please hold on")
    const user = await UserModel.findOne({
        username: req.body.username
    })
    if (!user) {
        let tempUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        }
        console.log(tempUser.firstName, tempUser.lastName)

       return UserModel.create(tempUser).then(savedUser=>{
            res.status(200).json({
                "Message": "Successfully saved user",
                "user": savedUser
            })
        }). catch(err=>{
            res.status(400).json({
                "Message": "Error occured",
                "Error": err
            })
        })
    }
}