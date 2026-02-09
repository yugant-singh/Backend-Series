require("dotenv").config()
const mongoose = require("mongoose")


function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("DB connected successfully")
    })
}


module.exports = connectDB