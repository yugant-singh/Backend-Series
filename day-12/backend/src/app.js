const express = require("express")
const app = express()
const authRouter = require("./routes/auth.route")
const cookieParser = require("cookie-parser")
app.use(express.json())
app.use(cookieParser())
// create prefix for the register controler
app.use("/api/auth",authRouter)







module.exports = app