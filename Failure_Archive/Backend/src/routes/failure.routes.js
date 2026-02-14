const express =require("express")
const failureRouter = express.Router()
const failureController = require("../controllers/failure.controller")

failureRouter.post("/",failureController.createFailureController)

module.exports = failureRouter