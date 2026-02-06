require("dotenv").config()
const mongoose = require("mongoose");


const connetDB = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected To DB")
    })
}

module.exports = connetDB
