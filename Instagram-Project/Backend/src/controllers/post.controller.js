const postModel = require("../models/post.model")
const Imagekit = require("imagekit")
const jwt = require("jsonwebtoken")
const { post } = require("../routes/post.routes")

const imagekit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})


async function createPostController(req, res) {

    const file = req.file
    const result = await imagekit.upload({
        file: file.buffer,
        fileName: file.originalname,
        folder: "Instagram/Posts"
    })


   
    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: result.url,
        user: req.user.id
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })

}

async function getPostcontroller(req, res) {
 
    userId = req.user.id

    const posts = await postModel.find({ user: userId })
    if (!posts) {
        return res.status(404).json({
            message: "post not found"
        })
    }

    res.status(200).json({
        message: "posts fetch successfully",
        posts
    })

}

async function getPostDetailsController(req,res){
    const postId = req.params.postId


userId = req.user.id
const post = await postModel.findById(postId)
if(!post){
    return res.status(404).json({
        message:"post not found"
    })
}

const isValidUser = post.user.toString() ===userId
if(!isValidUser){
    return res.status(403).json({
        message:"Forrbidden Content."
    })
}

res.status(200).json({
    message:"Post fetched successfully",
    post
})

}

async function  getFeedController(req,res){


const posts  = await postModel.find()
.populate("user" ,"username bio email profile_url")
res.status(200).json({
    message:"posts fetched successfully",
    posts
})
}

module.exports = {
    createPostController,
    getPostcontroller,
  getPostDetailsController,
  getFeedController
}