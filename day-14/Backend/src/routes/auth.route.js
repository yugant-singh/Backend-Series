const express = require("express")
const userModel = require("../models/user.mode")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")

// /register method

authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    const userExist = await userModel.findOne({ email })
    if (userExist) {
        return res.status(409).json({
            message: "For this email user already exist"
        })
    }
    const user = await userModel.create({
        name, email, password
    })
    const token = jwt.sign({
        id: user._id
    },
        process.env.JWT_SECRET
    )
    res.cookie("token", token)
    res.status(201).json({
        message: "user registered successfully",
        user,
        token
    })

})

// /login method
authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    console.log(password)

    const user = await userModel.findOne({ email })
    if (!user) {
        return res.status(404).json({
            message: "for this email | user not found"
        })
    }
    
    if (user.password !== password) {
        return res.status(409).json({
            message: "Invalid Password"
        })
    }

    const token = jwt.sign({
        id: user._id
    },
        process.env.JWT_SECRET
    )

    res.cookie("Token", token)
    res.status(201).json({
        message: "user logged In successfully",
        user,
        token
    })
})



module.exports = authRouter