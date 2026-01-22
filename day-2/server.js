const express = require("express")
const app = express();


app.get("/",(req,res)=>{
    res.send("Hello From the Root")
})

app.get("/about", (req,res)=>{
res.send("Hello from the about page")
    
})


app.listen(3000,(req,res)=>{
    console.log("server is running on 3000 port");
    
})