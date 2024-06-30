import express from "express";
const app=express();
import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config()

connectDB()
.then(()=>{
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running on PORT",process.env.PORT);
})
})
.catch((err)=>{
    console.log("MONGO db failed to connect !!",err);
});

