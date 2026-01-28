const express = require("express");
const app = express();

app.use(express.json());

const users = [];
// POST Method 
app.post("/users",(req,res)=>{
    const user = req.body
    users.push(user);
    console.log(users); 
    res.status(201).json({
        success:true,
        message:"User created successfully"
    }) 
})

// GET Method 
app.get("/users",(req,res)=>{
    res.status(200).json({
        success:true,
        users: users
    })
})

//GET fetch data dynamicly
app.get("/users/:id",(req,res)=>{

    res.status(200).json({
        success:true,
        user:users[req.params.id]
    })
})

// PATCH Method
app.patch("/users/:id", (req,res)=>{
users[req.params.id].age = req.body.age

res.status(201).json({
    success:true,
    msessage:"changes done successfully"
})
})

// DELETE Method 

app.delete("/users/:id",(req,res)=>{

    const deletedUser = users[req.params.id];
    delete users[req.params.id]
    res.status(200).json({
        success:true,
        message:`${deletedUser} is deleted successfully`
    })

})











module.exports = app