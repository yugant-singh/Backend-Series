const express = require("express");
const userModel = require("../models/user.model");
const authRouter = express.Router();
const jwt = require("jsonwebtoken")




authRouter.post("/register", async (req, res) => {


    const { name, email, password } = req.body
    const userExist = await userModel.findOne({ email })
    if (userExist) {
        return res.status(409).json({
            message: "for this email user already exist"
        })
    }
    const user = await userModel.create({
        name, name, password
    })
     const token = jwt.sign({
        id: user._id,
        email: user.email,
    },
        process.env.JWT_SECRET
    )
    res.cookie("TOKEN",token)
    res.status(201).json({
        message: "user register successfully",
        user,
        token
    })

})