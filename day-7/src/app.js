const express = require("express");
const app = express();
const userModel = require("./model/user.model")

app.use(express.json());

//POST Method

app.post("/users", async (req, res) => {
    const { id, username, city } = req.body
    const user = await userModel.create({
        id, username, city
    })
    res.status(201).json({
        message: "user create successfully",
        user
    })
})

//GET Method
app.get("/users", async(req,res)=>{

    const users  =  await  userModel.find()
    res.status(200).json({

        Message:"users data fetched successfully",
        users
        
    })

})








module.exports = app