const express = require("express")
const authRouter = express.Router()
const authController = require("../controllers/auth.controller")



// /register api creation ==> /api/auth/register

authRouter.post("/register",authController.registerController)

// /login api creation ==> /api/auth/login
authRouter.post("/login", authController.loginController)


module.exports = authRouter