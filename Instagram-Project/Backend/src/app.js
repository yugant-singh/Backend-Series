const express = require("express");
const cookieParser= require("cookie-parser")
const authRouter = require("./routes/auth.routes")
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth/",authRouter)    // make the prefix of the register api


module.exports = app