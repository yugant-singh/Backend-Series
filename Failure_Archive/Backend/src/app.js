const express = require("express")
const app =express()
const authRouter =require("../src/routes/auth.route")
const cookieParser = require("cookie-parser")
const failureRouter = require("./routes/failure.routes")
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)  // auth method
app.use("/api/failure",failureRouter) // /failure method 





module.exports =app