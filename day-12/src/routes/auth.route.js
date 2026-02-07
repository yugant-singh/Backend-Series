const express = require("express")
const authRouter = express.Router()
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
// Register api creation


authRouter.post("/register", async (req, res) => {
    const { email, name, password } = req.body

    const isUserExist = await userModel.findOne({ email })
    if (isUserExist) {
        return res.status(409).json({
            message: "user already exist from this email"
        })
    }
    const hash = crypto.createHash("md5")
    const user = await userModel.create({
        email, password, name
    })

    const token = jwt.sign({
        id: user._id,
        email: user.email
    },
        process.env.JWT_SECRET
    )

    res.cookie("Token", token)
    res.status(201).json({
        meassage: "User registered successfully",
        user,
        token

    })
})

//login api creation

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user =  await userModel.findOne({ email })
    if (!user) {
        return res.status(401).json({
            message: "email not found"
        })
    }
    if (user.password != password) {
        return res.status(401).json({
            message: "Invalid Password"
        })
    }
    const token = jwt.sign({
        id: user._id
    },
        process.env.JWT_SECRET
    )
    res.cookie("JWT_TOKEN", token)

    res.status(201).json({
        message: "yser loggedin successfully",
        user,
        token
    })

})


module.exports = authRouter