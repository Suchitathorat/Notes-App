import {model, Schema } from "mongoose";

//model design
const noteSchema =new Schema({
    title:String,
    content:String,
    category:String,
})
const Note =model("Note",noteSchema);

export default Note;