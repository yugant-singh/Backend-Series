const express = require("express")
const authRouter = express.Router()
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")



authRouter.post("/register", async (req, res) => {

    const { name, email, password } = req.body
    const isUserExist = await userModel.findOne({ email })
    if (isUserExist) {
        return res.status(400).json({
            message: "With this email user already exist"
        })
    }
    const user = await userModel.create({
        name, email, password
    })

    const token = jwt.sign(      // Create the Token
        {
            id: user._id,
            email: user.email
        }
        ,
        process.env.JWT_SECRET
    )
    
    res.cookie("token",token)   //Set Cookie to User browser
    res.status(201).json({
        message: "user register successfully ",
        user,
        token
    })
})

module.exports = authRouter