const mongoose = require('mongoose');
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    avatar:{
        type:string, // cloudinary url
        required:true
    },
    coverImage: {
        type: String, // cloudinary url
    },
    refreshToken: {
            type: String
        },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "video"
        }
    ],
},
{
    timestamps:true
})


userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();//agr modidy nhi hua to kya zrurt h psswrd ka encrypt value change krne ka

    this.password = await bcrypt.hash(this.password, 10)
    next()
})
// ye bcrypt thoda time leta h isiliye async await use kiye
//arrow function nhi use kia kioki usme this nhi use skte
//iska mtlb before save do this (hash or encrypt)
// mtlb .pre("ye kaam ke phle","ye kro")



userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}




userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}





export const User = mongoose.model("users",userSchema);