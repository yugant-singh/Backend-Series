const postModel = require("../models/post.model")
const Imagekit = require("imagekit")

const imagekit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})


async function createPostController(req, res) {
    
    const file = req.file
    const result = await imagekit.upload({
        file: file.buffer,
        fileName: file.originalname
    })

    res.send(result.url)
}

module.exports = {
    createPostController
}