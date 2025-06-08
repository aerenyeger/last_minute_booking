import mongoose from 'mongoose'
const mongoose=require("mongoose");
const ticketschema=new mongoose.Schema({
    pnrnumber:{
        type:Number,
        required:true,
        maxlength:10,
        unique:true
    },
    startdate:{
        type:Date,
        required:true,
    },
    enddate:{
        type:Date,
        required:true,
        expires:0,
    },
    class:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const Ticket=mongoose.model("Ticket",ticketschema);
module.exports=Ticket
