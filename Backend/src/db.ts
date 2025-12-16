import mongoose, { model, Schema } from "mongoose";
const contenTypes = ['image','video','article','audio'];
import dotenv from "dotenv"

dotenv.config();
const mongo_url= process.env.MONGO_DB_URL; 
if (!mongo_url) {
  throw new Error("MONGO_DB_URL is not defined in environment variables");
}
mongoose.connect(mongo_url);

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);