const followModel = require("../models/follow.model")


async function getFollowController(req, res) {              //Follow Controller
    try {
        const followerId = req.user.id
        const followingId = req.params.userId
        if (followerId === followingId) {
            return res.status(400).json({
                message: "You can not follow Yourself"
            })
        }
        const isAlreadyFollowing = await followModel.findOne({
            follower: followerId,
            following: followingId
        })

        if (isAlreadyFollowing) {
            return res.status(400).json({
                message: `You already followed this account`
            })
        }
        const follow = await followModel.create({
            follower: followerId,
            following: followingId
        })
        res.status(201).json({
            message: `You followed ${followingId} successfully`
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }
}

async function unFollowController(req, res) {
    try {
        followerId = req.user.id
        followingId = req.params.userId
        if (followerId === followingId) {
            return res.status(400).json({
                message: "You can not Unfollow Yourself"
            })
        }
        const isFollowExist = await followModel.findOne({
            follower: followerId,
            following: followingId
        })

        if (!isFollowExist) {
            return res.status(400).json({
                message: `You Already Unfollow This Account`
            })
        }

        await followModel.findByIdAndDelete(isFollowExist._id)
        res.status(200).json({
            message: "You Unfollow this account Successfuly"
        })

    } catch (err) {

        return res.status(500).json({
            message: "Server",
            error: err.message
        })
    }
}

module.exports = {
    getFollowController,
    unFollowController
}