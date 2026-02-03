const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
app.use(cors())
app.use(express.json())
app.use("/images", express.static("public/images"))
const userModel = require("./model/user.model")
app.use(express.static("./public"))

//POST Method

app.post("/api/users", async (req, res) => {
    const { username, role, profileUrl, country, description } = req.body
    const user = await userModel.create({
        username, role, profileUrl, country, description
    })

    res.status(201).json({
        message: "user created successfully",
        user
    })
})

// GET Method 
app.get("/api/users", async (req, res) => {
    const users = await userModel.find()
    res.status(200).json({
        message: "all user data fetched successfully ",
        users
    })

})


// DELETE Method 
app.delete("/api/users/:id", async (req, res) => {
    const id = req.params.id
    console.log(id);

    const user = await userModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "user deleted successfully",
        user
    })

})

// PATCH Method

app.patch("/api/users/:id", async (req, res) => {

    const id = req.params.id
    const { username, role, country, description, profileUrl } = req.body
    const user = await userModel.findByIdAndUpdate(id,
        { username, role, country, description, profileUrl },
        { new: true }
    )
    res.status(200).json({
        message: "changes successfully updaated",
        user
    })
})

app.use("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})


module.exports = app