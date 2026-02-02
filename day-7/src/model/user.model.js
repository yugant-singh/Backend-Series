const mongoose = require("mongoose");



const userSchema  = new mongoose.Schema({
    id:Number,
    username:String,
    city:String
})


const userModel = mongoose.model("users", userSchema);
module.exports = userModel;