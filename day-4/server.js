const app = require("./src/app")

const users = [];
//POST Method
app.post("/users" ,(req,res)=>{
  users.push(req.body)
  console.log(users);
  res.send("Post created successfully")
})

//GET Method

app.get("/users", (req,res)=>{
  res.send(users)
})
//DELETE Method

app.delete("/users/:id",(req,res)=>{
  delete  users[req.params.id];
  res.send("User Deleted successfuly")
})

//PATCH Method
app.patch("/users/:id",(req,res)=>{

  users[req.params.id].username = req.body.username
  res.send("changes successfuly updated")
})










app.listen(3000,()=>{
  console.log("Server is running on port 3000");
  
})