const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes=require("./Routes/userRoutes");

const app=express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("done");
})

app.use("/",userRoutes)

module.exports=app;