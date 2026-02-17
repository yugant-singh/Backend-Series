const failureModel = require("../models/failure.model")
const jwt = require("jsonwebtoken")
async function createFailureController(req, res) {

    try {
        const { title, description, lesson, tags, isAnonymous, relatableCount } = req.body
        const token = req.cookies.token
        console.log(token)
        if (!token) {
            return res.status(403).json({
                message: "token not found"
            })
        }

        let decode;
        try {
            decode = jwt.verify(token, process.env.JWT_SECRET)
        }
        catch (err) {
            return res.status(403).json({
                message: "invaild toke! Unauthorized access"
            })
        }
        const userId = decode.id
        const failure = await failureModel.create({
            title,
            description,
            lesson,
            tags,
            isAnonymous,
            relatableCount,
            user:userId
        })

        res.status(201).json({
            message:"failure created successfuly",
            failure
        })
    }

    catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }

}

async function getAllFailureController(req,res){
    
}

module.exports = {
    createFailureController,
    getAllFailureController
}