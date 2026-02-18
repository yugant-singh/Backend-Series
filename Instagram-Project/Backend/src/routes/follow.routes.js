const express = require("express")
const followRouter= express.Router()
const followController = require("../controllers/follow.controller")
const identifyUser = require("../middlewares/auth.middleware")
followRouter.post("/:userId",identifyUser,followController.getFollowController) // follow User api
followRouter.delete("/:userId",identifyUser,followController.unFollowController)

module.exports = followRouter