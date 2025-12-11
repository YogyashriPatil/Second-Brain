import mongoose, { Types } from "mongoose";
const contenTypes = ['image','video','article','audio'];

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    passWord: {
        type: String,
        required: true
    }
})

const contentSchema = new mongoose.Schema({
    Link:{
        type:String,
        required:true
    },
    type:{
        type: String,
        enum: contenTypes,
        required: true
    },
    title:{
        type:String,
        required:true
    },
    tags:[
        {
            type: Types.ObjectId,
            ref:'Tag'
        }
    ],
    userId :{
        type: Types.ObjectId,
        ref:'User',
        required: true
    }
})

const tagsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
})

const LinkSchema = new mongoose.Schema({
    hash: {
        type: String,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
})


const User = mongoose.model("User", userSchema);
const Content = mongoose.model("Content", contentSchema);
const Tag = mongoose.model("Tag", tagsSchema);
const Link = mongoose.model("Link", LinkSchema);

module.exports = {
    User: User,
    Content: Content,
    Tag: Tag,
    Link: Link
}