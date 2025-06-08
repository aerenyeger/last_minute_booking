const express = require('express');
const axios = require('axios');
const app = express();

const connectDB=require("./config/connectDB")
const Trainroutes = require('./routes/Trainroutes');

require("dotenv").config()

const port=process.env.port

const mongoose = require('mongoose');
app.use(express.json());

app.use("/api",Trainroutes)


connectDB();

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
