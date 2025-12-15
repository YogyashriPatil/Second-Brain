import express from "express";
import mongoose, { mongo } from "mongoose";
import jwt from "jsonwebtoken";
import {User ,Content,Tag, LinkModel} from "./db.js"
import dotenv from "dotenv"
import { userMiddleware } from "./middleware.js";
import { random } from "./utils.js";

dotenv.config();
const port = process.env.PORT || 3000 ;
const jwtpassword = process.env.jwtpassword;
if (!jwtpassword) {
  throw new Error("jwtpassword is not defined in environment variables");
}

const app = express();
app.use(express.json());

console.log("hit")
app.get("/", async(req,res) => {
    res.json({
        message : "hi there"
    })
})
app.post("/signup", async (req,res) => {
    res.json({
        message : "user signed up"
    })
    // todo: zod validation , hash the password
    const username = req.body.username;
    const password = req.body.password;

    try {
        await User.create({
            username: username,
            password:password
        })

        res.json({
            message : "user signed up"
        })
    }
    catch(e){
        res.status(411).json({
            message:"user already exiss"
        })
    }

})
app.post("/signin",async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user =await User.findOne({
        username: username,
        password:password
    })

    // use the jwt logic
    if(user) {
        const token = jwt.sign({
                id: user._id.toString
        },jwtpassword)
        res.json({
            message : token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrrect credentials"
        })
    }
})
// fcreate the content
// get the userid from middleware
// 
app.post("/api/v1/content", userMiddleware , async (req,res) => {
    const link = req.body.linkS;
    const type = req.body.type;
    await Content.create({
        Link: link,
        type,
        title: req.body.title,
        tags: [],
        userId: req.userId
    })

    res.json({
        message: "Content added"
    })
 })
app.get("/api/v1/content",userMiddleware,async (req,res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await Content.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})
app.delete("/api/v1/content",userMiddleware, async (req,res) => {
    const contentId = req.body.contentId;
    await Content.deleteMany({
        contentId,
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})
app.post("/api/v1/brain/share",userMiddleware, async (req,res) => {
    const share = req.body.share;
    if(share){
        const hash = random(10);
        await LinkModel.create({
            userId: req.userId,
            hash: hash
        })
        res.json({
            message: "updated shared link" + hash
        })
    }
    else{
        await LinkModel.deleteOne({
            userId: req.userId
        })
    }
    res.json({
        message: "updated shared link"
    })
})
app.get("/api/v1/brain/:shareLink", async (req,res) => {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash
    })
    if(!link){
        res.status(411).json({
            message: "sorry incorrect input"
        })
        return
    }
    const content = await Content.find({
        userId: link.userId
    })
    const user = await User.findOne({
        userId: link.userId
    })
    if(!user){
        res.status(411).json({
            message: "user not found"
        })
        return
    }

    res.json({
        username:user?.username,
        content: content
    })
})

app.listen(port, () => {
    console.log("server listening on the port " + port)
})