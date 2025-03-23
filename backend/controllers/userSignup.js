const UserModel = require("../model/User")
const bcrypt = require('bcrypt')

const signUpController = async (req, res) => {
    try {
        const {username, email, password } = req.body;
        console.log('request body', req.body)

        const user = await UserModel.findOne({ username, email })
        if (user) {
           throw new Error("User already exist");   
        }

        if (!username) {
            throw new Error("please provide a valid username");
        }

        if (!email) {
           throw new Error("please provide a valid email"); 
        }
         if (!password) {
            throw new Error("please provide a password");
         }

         const salt = bcrypt.genSaltSync(10)
        const hashPassword = await bcrypt.hashSync(password, salt)

        const payload = {
           ...req.body,
           role : "user",
           password : hashPassword
        }; 

        const newUser = new UserModel(payload);

        await newUser.save()

        console.log('new user', newUser)
        res.status(201).json({
            data : newUser,
            message : "new user created successful",
            success: true,
            error: false
        })
    } catch (err) {
        res.status(400).json({
            message : err.message || 'server Error',
            success : false,
            error : true
        })
    }
}

module.exports = signUpController