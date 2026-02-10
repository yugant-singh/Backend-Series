const express = require("express");
const cors = require("cors")
const path = require("path")
const app = express()
const authRouter = require("./routes/auth.route")
const cookieParser = require("cookie-parser")

app.use(cors())
app.use(express.json())
app.use(cookieParser())

// API routes
app.use("/api/auth", authRouter)

// Static files
app.use(express.static("./public"))


app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
