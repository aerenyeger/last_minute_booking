const express = require('express');
const axios = require('axios');
const app = express();
const cors=require("cors")
const connectDB=require("./config/connectDB")
const Trainroutes = require('./routes/Trainroutes');

require("dotenv").config()

const port=process.env.PORT || 3000

const mongoose = require('mongoose');
app.use(express.json());
app.use(cors({
  origin:[
    "http://localhost:5173",
    "https://last-minute-booking-frontend.onrender.com"
  ],
  credentials:true
}))
app.use("/api",Trainroutes)


connectDB();

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
