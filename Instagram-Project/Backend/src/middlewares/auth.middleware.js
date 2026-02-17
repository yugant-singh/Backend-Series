const jwt = require("jsonwebtoken")
async function identifyUser(req, res, next) {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Token not provided! unauthorized access"
        })
    }
    let decode = null
    try {
        decode = jwt.verify(token, process.env.JWT_SECRET)
    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid token! unauthorized access"
        })
    }

    req.user = decode
    next()

}

module.exports = identifyUser