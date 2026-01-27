const express = require("express")
const app = express()

app.use(express.json())

const products = []

//POST Method 
app.post("/products", (req, res) => {
    products.push(req.body);
    res.status(201).json({
        message: "product details added successfully"
    })
})
//GET Method
app.get("/products", (req, res) => {
    res.status(200).json({
        success: true,
        data: products
    })
})

//GET Method Dynamically
app.get("/products/:id", (req, res) => {
    console.log(req.params.id);
    res.status(200).json({
        success: true,
        data: products[req.params.id]
    })
})

//PATCH Method
app.patch("/products/:id", (req, res) => {
    products[req.params.id].price = req.body.price
    res.status(201).json({
        success: true,
        message: products[req.params.id]
    })
})
//Delete Method

app.delete("/products/:id",(req,res)=>{
   delete products[req.params.id]
    res.status(200).json({
        success:true,
        message:"product deleted successfully"
    })
})





module.exports = app