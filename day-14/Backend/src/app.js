const express = require("express");
const cors = require("cors")
const app =express()
const authRouter = require("./routes/auth.route")
const cookieParser = require("cookie-parser")
app.use(express.static("./public"))
app.use(cors())
app.use(express.json())
app.use(cookieParser())
// make the prefix for regiater api
app.use("/api/auth", authRouter)





module.exports = app