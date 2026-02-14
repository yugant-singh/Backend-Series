const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        unique: [true, "email is must be unique for register"],
        required: [true, "email must be required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    role: {
        type: String,
        required: [true, "role must be required"]
    },


})
const userModel = mongoose.model("users", userSchema)
module.exports=userModel