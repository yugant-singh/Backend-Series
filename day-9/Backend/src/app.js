const express  = require("express")
const app = express()
app.use(express.json())
const userModel = require("./model/user.model")

//POST Method

app.post("/api/users", async (req,res)=>{
    const {username,role,profileUrl,country,description} = req.body
    const user  =  await userModel.create({
        username,role,profileUrl,country,description
    })

    res.status(201).json({
        message:"user created successfully",
        user
    })
})

// GET Method 
app.get("/api/users",async (req,res)=>{
    const users  = await userModel.find()
    res.status(200).json({
        message:"all user data fetched successfully ",
        users
    })

})


// DELETE Method 
app.delete("/api/users/:id",async (req,res)=>{
const id = req.params.id
console.log(id);

 const user = await userModel.findByIdAndDelete(id)
 res.status(200).json({
    message:"user deleted successfully",
    user
 })

})

// PATCH Method

app.patch("/api/users/:id", async (req,res)=>{

    const id = req.params.id
    const {role} = req.body
   const user  = await  userModel.findByIdAndUpdate(id,{role})
   res.status(200).json({
    message:"changes successfully updaated",
    user
   })
})



module.exports = app