const express = require("express");
const cookieParser= require("cookie-parser")
const cors  = require("cors")
const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.routes")
const followRouter = require("./routes/follow.routes")
const likeRouter = require("./routes/like.routes")
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))

app.use("/api/auth/",authRouter)      // make the prefix of the register api
app.use("/api/posts",postRouter)     // make the prefix of the post api
app.use("/api/follow",followRouter) // make the prefix of the follow api
app.use("/api/like",likeRouter)    // make the prefix of the like api



module.exports = app