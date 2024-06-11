const mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const videoSchema= new mongoose.Schema({
videoFile:{
    type:String,
    required:true
},
thumbnail:{
    type:String,
    required:true
},
title:{
    type:string,
    required:true,
},
description:{
    type:String,
    required:true
},
views:{
    type:Number,
    default:0
},
isPublished:{
    type:Boolean,
    default:true
},
owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
}

},
{
    timestamps:true
}
)

videoSchema.plugin(aggregatePaginate);

export const Video = mongoose.model("video", videoSchema)