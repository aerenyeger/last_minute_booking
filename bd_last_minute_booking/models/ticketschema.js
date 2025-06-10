
const mongoose=require("mongoose");
const ticketschema=new mongoose.Schema({
    pnrnumber:{
        type:Number,
        // required:true,
        // maxlength:10,
        // unique:true
    },
    startdate:{
        type:Date,
        // required:true,
    },
    journeyclass:{
        type:String,
        // required:true
    },
    price:{
        type:Number,
        // required:true
    },
    sourceStation:{
        type:String
    },
    reservationUpto:{
        type:String
    },
    upi_id:{
        type:String,
        // required:true
    },
    train_no:{
        type:Number
    }
})

const Ticket=mongoose.model("Ticket",ticketschema);
module.exports=Ticket
