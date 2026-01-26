const express  = require("express")
const app = express();

app.use(express.json())


const products = []

app.post("/products", (req,res)=>{
products.push(req.body);
console.log(products);
res.status(201).json({
    message:"product detail added successfully"
})
})

app.get("/products",(req,res)=>{
    res.status(200).json({
    message:products
    })
})













module.exports= app