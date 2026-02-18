const express = require("express")
const likeRouter= express.Router()
const likeController = require("../controllers/like.controller")
const identifyUser = require("../middlewares/auth.middleware")

likeRouter.post("/:postId",identifyUser,likeController.getLikeController) // like api method
likeRouter.delete("/:postId",identifyUser,likeController.unLikeController)

module.exports = likeRouter