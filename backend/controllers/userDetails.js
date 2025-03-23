const UserModel = require('../model/User')
const userDetailsController = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId)

        res.status(200).json({
            data : user,
            message : 'user logged in',
            success : true,
            error: false
        })
         console.log('userDetails', user)
    } catch (err) {
        res.status(400).json({
            message: 'server err' || err.message,
            success: false,
            error: true
        })
    }
} 

module.exports = userDetailsController