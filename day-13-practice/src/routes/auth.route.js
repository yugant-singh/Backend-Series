const express = require("express")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")
// /register api creation
authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body

    const existUser = await userModel.findOne({ email })
    if (existUser) {
        return res.status(409).json({
            message: "user already exist"
        })
    }

    const user = await userModel.create({
        name, email, password
    })
    const token = jwt.sign({
        id: user._id,
        email: user.email
    },
        process.env.JWT_SECRET
    )

    res.cookie("token", token)

    res.status(201).json({
        message: "user registerd successfully",
        user,
        token
    })

})
// /login creation

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) {
        return res.status(404).json({
            message: "this email not found"
        })
    }
    if (user.password !== password) {

        return res.status(409).json({
            message: "invalid password"
        })
    }

    const token = jwt.sign({
        id: user._id,

    },
        process.env.JWT_SECRET
    )

    res.status(201).json({
        message: "user loggedin successfully",
        user,
        token
    })

})

module.exports = authRouter