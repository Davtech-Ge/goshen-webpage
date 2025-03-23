const jwt = require('jsonwebtoken')

const AuthToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token

        if(!token) {
            res.status(200).json({
                message: 'user not logged in',
                error: true,
                success : false
            })
        }
            
        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded){
            console.log(err)
            console.log("decoded", decoded)

            if(err){ sameSite : true,
                console.log('error auth',err)
            }


            req.userId = decoded?._id
            next()

        })
    }catch (err) {
        res.status(400).json({
            message : err.message,
            error: true,
            succcess : false
        })
    }
}

module.exports = AuthToken