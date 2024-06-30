import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"


const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}
))


//API REFERENCE

//When a client (like a web browser or mobile app) sends a POST request with JSON data, this middleware processes (parses) that JSON data so you can use it in your server-side code.
//The express.json() middleware parses this JSON data and makes it available in req.body, so you can log it or use it in your code.
app.use(express.json({limit:"12kb"}))

//When a user submits an HTML form, the data is sent to the server in a URL-encoded format. This middleware processes that data so you can use it in your server-side code.
app.use(express.urlencoded({extended:true,limit:"12kb"}))
app.use(express.static("public"))




app.use(cookieParser())


export {app}