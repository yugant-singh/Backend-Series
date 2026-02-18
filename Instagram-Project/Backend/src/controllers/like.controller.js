const likeModel = require("../models/like.model")
const postModel = require("../models/post.model")


async function getLikeController(req, res) {
    try {
        const userId = req.user.id
        const postId = req.params.postId
        const post = await postModel.findById(postId)
        if (!post) {
            return res.status(404).json({
                message: "Post Not Found"
            })
        }
        const isAlreadyLiked = await likeModel.findOne({
            user: userId,
            post: postId
        })

        if (isAlreadyLiked) {
            return res.status(400).json({
                message: "You Already liked this post"
            })
        }
        const like = await likeModel.create({
            user: userId,
            post: postId
        })
        res.status(201).json({
            message: "You Like this post successfully",
            like
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }

}

async function unLikeController(req, res) {
    try {
        const userId = req.user.id
        const postId = req.params.postId

        const post = await postModel.findById(postId)
        if (!post) {
            return res.status(404).json({
                message: "post not found"
            })
        }

        const like = await likeModel.findOne({
            user: userId,
            post: postId
        })
        if (!like) {
            return res.status(400).json({
                message: "You haven't liked this tweet yet"
            })
        }

        await likeModel.findByIdAndDelete(like._id)
        res.status(200).json({
            message: "You Unlike this post successfully"
        })
    } catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }

}

module.exports = {
    getLikeController,
    unLikeController
}