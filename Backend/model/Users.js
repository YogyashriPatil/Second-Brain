import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: String,
    passWord: String
})

const userContent= mongoose.Schema({
    userName: String,
    passWord: String
})

