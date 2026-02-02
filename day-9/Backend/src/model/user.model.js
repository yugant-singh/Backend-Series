const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username:String,
    role:String,
    profileUrl:String,
    description:String,
    country:String
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel