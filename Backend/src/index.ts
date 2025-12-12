import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {User ,Content,Tag,Link} from "./db.js"
import dotenv from "dotenv"

dotenv.config();
// const port = process.env.PORT;

const jwtpassword = "abcd";
// app.use(express.json());
const mongo_url = process.env.MONGO_DB_URL; 
mongoose.connect(mongo_url)


const app = express();

app.post("api/v1/signup", async(req,res) => {
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
app.post("api/v1/signin",async (req,res) => {
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
app.post("api/v1/content",(req,res) => {
    
 })
app.get("api/v1/content",(req,res) => {
    
})
app.delete("api/v1/signin",(req,res) => {
    
})
app.post("api/v1/brain/share",(req,res) => {
    
})
app.get("api/v1/brain/:shareLink", (req,res) => {

})

app.listen(3000, () => {
    console.log("server listening on the port 3000")
})