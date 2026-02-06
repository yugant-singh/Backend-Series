const app =require("./src/app")
const connetDB = require("./src/config/database")

connetDB()

app.listen(3000,(req,res)=>{
    console.log("Server is running on Port 3000")
})