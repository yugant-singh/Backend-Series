const express = require("express")
const authRouter = express.Router()
const authController = require("../controllers/auth.controller")
const identifyUser = require("../middlewares/auth.middleware")


// /register api creation ==> /api/auth/register

authRouter.post("/register",authController.registerController)

// /login api creation ==> /api/auth/login
authRouter.post("/login", authController.loginController)

// /get-me api creation ==> /api/auth/get-me

authRouter.get("/me",identifyUser,authController.getMeController)

module.exports = authRouter