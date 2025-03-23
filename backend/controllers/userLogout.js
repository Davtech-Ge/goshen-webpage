const LogOutController = async (req, res) => {
    try {
        res.clearCookies('token');

        res.status(200).json({
            message : 'Logout Successfully',
            success : true,
             error : false,
             data : []
        })
    } catch {
        res.Json({
            message : 'error loggging out',
            success : false,
            error : true
        })
    }
}

module.exports = LogOutController