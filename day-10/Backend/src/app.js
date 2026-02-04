const cors = require("cors")
const express = require("express");
const app = express();
const productModel = require("./model/product.model")
app.use(cors())
app.use(express.json())
//  Create POST Method

app.post("/api/products", async (req, res) => {
    const { name, price, category, description, stock, imageUrl } = req.body
    const product = await productModel.create({ name, price, category, description, stock, imageUrl })
    res.status(201).json({
        message: "product created successfully",
        product
    })
})

// Create GET Method
app.get("/api/products", async (req, res) => {
    const products = await productModel.find();
    res.status(200).json({
        message: "products fetched successfully",
        products
    })
})

// Create DELETE Method()
app.delete("/api/products/:id", async (req, res) => {
    const id = req.params.id
    await productModel.findByIdAndDelete(id)
    res.status(201).json({
        message: "product deleted successfully"
    })
})

// Create PATCH Method
app.patch("/api/products/:id", async (req, res) => {
    const id = req.params.id
    const { name, price, category, description, stock, imageUrl } = req.body
    const product = await productModel.findByIdAndUpdate(id, {
        name, price, category, description, stock, imageUrl
    })
    res.status(200).json({
        message: "Changes successfully applied",
        product

    })
})






module.exports = app