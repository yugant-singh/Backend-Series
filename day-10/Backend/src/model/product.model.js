const mongoose = require("mongoose")
const productSchema  = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    description:String,
    stock :Number,
    imageUrl:String
})

const productModel = mongoose.model("products",productSchema)

module.exports = productModel