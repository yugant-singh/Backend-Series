const mongoose = require("mongoose");

const noteSchema  = ({
    title:String,
    description:String
})

// to perform the CRUD Operation we have to create the model
const noteModel = new mongoose.model("notes",noteSchema);

module.exports = noteModel