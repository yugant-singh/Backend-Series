  const userModel = require("../models/user.model")
 const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
 
 // register controller
 async function registerController(req, res){
    const { username, email, password, bio, profile_url } = req.body
    // find user if exist in DB
    const isUserExist = await userModel.findOne({
        $or: [
            { username:username },
            { email:email }
        ]
    })

    // check condition if user is already exist
    if (isUserExist) {
        return res.status(409).json({
            message: "user is already Registered" + " | " + (username == isUserExist.username ? "Use different username" : "Use different Email")
        })
    }
    // encrypt the password
    const hash = await bcrypt.hash(password, 10)

    // create user 
    const user = await userModel.create({
        username,
        email,
        password: hash,
        bio,
        profile_url
    })
    // Create Token
    const token = jwt.sign({
        id: user._id
    }
        , process.env.JWT_SECRET
        , { expiresIn: "1d" }
    )
    //Send token in the cookie
    res.cookie("token", token)

    // send the response to client
    res.status(201).json({
        message: "User Registered successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profile_url: user.profile_url
        }
    })

}

//login controller
 async function loginController (req, res){
    const { username, email, password } = req.body
    const user = await userModel.findOne({
        $or: [
            {username},
            { email }
        ]
    })
    if (!user) {
        return res.status(409).json({
            message: "invalid email or password"
        })
    }

  const isPasswordValid= await bcrypt.compare(password,user.password)
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid Password"
        })
    }
    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET, { expiresIn: "1d" })

    res.cookie("token", token)

    res.status(200).json({
        message: "User LoggedIn successfully",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profile_url:user.profile_url
        }
        
    })

}

module.exports = {
    registerController,
    loginController
}