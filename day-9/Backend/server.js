
const mongoose = require("mongoose")
const connectToDB = require("./src/config/database")
const app = require("./src/app")


connectToDB()


app.listen(3000,(req,res)=>{
    console.log("Server is running on Port 3000") 
})