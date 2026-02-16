const mongoose = require("mongoose")
const failureSchema = new mongoose.Schema({
    title: String,
    description: String,
    lesson: String,
    tags: [String],
    isAnonymous: Boolean,
    relatableCount: Number,
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "userId must required "]
    },
    createdAt: Date
})

const failureModel = mongoose.model("failures",failureSchema)
module.exports = failureModel