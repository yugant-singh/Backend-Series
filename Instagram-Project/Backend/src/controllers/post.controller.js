const postModel = require("../models/post.model")
const Imagekit = require("imagekit")
const jwt = require("jsonwebtoken")

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


    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Token not provided! unauthorized access"
        })
    }
    let decode = null
    try {
         decode = jwt.verify(token, process.env.JWT_SECRET)
    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid token! unauthorized access"
        })
    }

    const post = await postModel.create({
        caption:req.body.caption,
        imgUrl:result.url,
        user:decode.id
    })

    res.status(201).json({
        message:"Post created successfully",
        post
    })

}

module.exports = {
    createPostController
}