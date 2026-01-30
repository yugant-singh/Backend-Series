const express = require("express");
const app = express();
const noteModel = require("./models/note.model")

app.use(express.json());

//POST Method 

app.post("/notes", async (req,res)=>{
    const {title,description} = req.body;
   const note = await noteModel.create({
        title,description
    })
      
    res.status(200).json({
        message:"note created successfully",
        note
    })
})

// GET Method

app.get("/notes",async (req,res)=>{

  const notes  =  await noteModel.find()
  res.status(201).json({
    message:"Data Fetched successfully",
    notes
  })

})







module.exports = app