const UserModel = require("../model/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const LoginController = async (req, res) => {
    try{
        const { username, password} = req.body;

        console.log('userdata', req.body)
        const user = await UserModel.findOne({ username});

        if(!user){
            throw new Error("user does not exist");
        }
        if(!password){
            throw new error ('please provide password');
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        console.log('pasword', isMatch)

        if(isMatch){
            const tokenData = {
                _id : user._id,
                username : user.username,
            }

            const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn : '6h'});

            const tokenOptions = {
                httpOnly : true,
                secure : true
            }

            res.cookie("token", token, tokenOptions).status(200).json({
                message : 'user Login successful',
                data : user,
                success: true,
                error : false
            })
        } else {
            throw new Error('invalid password')
        }
       
    } catch (err) {
        res.status(400).json({
            message : err.message || 'server Error',
            success : false,
            error : true
        })
    }
}

module.exports = LoginController