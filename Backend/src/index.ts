import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {User ,Content,Tag,Link} from "./db"
// import dotenv from "dotenv"
// // dotenv.config();
// const port = process.env.PORT;

// const jwtpassword = process.env.JWT_SECRET;
// app.use(express.json());
mongoose.connect("mongodb+srv://practice1:practice1@cluster0.q24qtpx.mongodb.net/Second-Brain")


const app = express();
app.post("api/v1/signin",async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user =await User.findOne({
        email: email
    })

    if(!user) {
        res.status(403).json({
            message : "User does not exist in our db"
        })
        return
    }
})
app.post("api/v1/content",(req,res) => {
    
})
app.get("api/v1/content",(req,res) => {
    
})
app.delete("api/v1/signin",(req,res) => {
    
})
app.post("api/v1/brain/share",(req,res) => {
    
})
app.get("api/v1/brain/:shareLink", (req,res){

})