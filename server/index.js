import express from 'express'
import cors from 'cors'
import mongoose, { model, Schema } from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();


const app=express();
app.use(cors());
app.use(express.json());

//connection to Database
const connectDB=async()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Database Connected")
}
connectDB();


const PORT=5000;

//model design
const noteSchema =new Schema({
    title:String,
    content:String,
    category:String,
})
const Note =model("Note",noteSchema);


//api to check health
app.get("/health",(req,res)=>{
    res.json({
        success:true,
        message:"Server is running",
        data:null
    })
});


//api to create note
app.post("/notes",async(req,res)=>{
    const{title,content,category}=req.body;

    const newNote=await Note.create({
        "title":title,
        "content":content,
        "category":category,
    })
   
    res.json({
        success:true,
        message:"Note Added successfully",
        data:newNote,
    })
})



//api to read note
app.get("/notes",async(req,res)=>{
   
    const notes = await Note.find();

    res.json({
        success:true,
        message:"Note fetched successfully",
        data:notes,

    })
})



//to find a specific one note
app.get("/notes/:id",async(req,res)=>{

    const {id}= req.params;

    const note =await Note.findOne({
        "_id":id,
    })

    res.json({
        success:true,
        message:"Note fetched successfully",
        data:note,

    })

})


//To update the api
app.put("/notes/:id",async(req,res)=>{
    const {id}=req.params;

    const{title,content,category}=req.body;

    await Note.updateOne({_id:id},{$set:{
        title:title,
        content:content,
        category:category,
    }})

    res.json({
        success:true,
        message:"Note updated successfully",
        data:null
    })
})



//api to delete 
app.delete("/notes/:id",async(req,res)=>{
    const {id}=req.params;

    await Note.deleteOne({_id:id});

    res.json({
        success:true,
        message:"Note deleted successfully",
        data:null

    })

})





app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})