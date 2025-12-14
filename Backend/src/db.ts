import mongoose, { Types } from "mongoose";
const contenTypes = ['image','video','article','audio'];
import dotenv from "dotenv"

dotenv.config();
const mongo_url= process.env.MONGO_DB_URL; 
if (!mongo_url) {
  throw new Error("MONGO_DB_URL is not defined in environment variables");
}
mongoose.connect(mongo_url);

const userModel = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const contentModel = new mongoose.Schema({
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


export const User = mongoose.model("User", userModel);
export const Content = mongoose.model("Content", contentModel);
export const Tag = mongoose.model("Tag", tagsSchema);
export const Link = mongoose.model("Link", LinkSchema);

