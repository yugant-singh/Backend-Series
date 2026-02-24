const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const identifyUser = require("../middlewares/auth.middleware")
const upload = multer({ storage: multer.memoryStorage() })


postRouter.post("/", upload.single("image"),identifyUser, postController.createPostController) //post method /api/posts

postRouter.get("/", identifyUser,postController.getPostcontroller)   //get method /api/posts/

postRouter.get("/details/:postId",identifyUser,postController.getPostDetailsController)                  

postRouter.get("/feed",identifyUser,postController.getFeedController)
module.exports = postRouter