const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

async function registerController(req, res) {    ///api/auth/register

    try {
        const { name, email, password, role } = req.body
        const isUserExist = await userModel.findOne({ email })
        if (isUserExist) {
            return res.status(409).json({
                message: "user already exist for this email"
            })
        }
        const hash = await bcrypt.hash(password, 10)
        console.log(hash)
        const user = await userModel.create({
            name,
            email,
            password: hash,
            role
        })

        const token = jwt.sign({
            id: user._id
        },
            process.env.JWT_SECRET, { expiresIn: "1d" }
        )

        res.cookie("token", token)
        res.status(201).json({
            message: "user created successfully",
            user,
            token
        })
    } catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }

}
async function loginController(req, res) {      ///api/auth/login
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        console.log(isMatch)
        if (!isMatch) {                    //  password match
            return res.status(401).json({
                message: "Invalid Password"
            })
        }
        const token = jwt.sign({            //create token
            id: user._id
        }, process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )
        res.cookie("token", token) //send the token

        res.status(200).json({
            message: "User loggedIn successfully",
            token,
         
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }
}

module.exports = {
    registerController,
    loginController
}