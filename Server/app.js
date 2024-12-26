const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes=require("./Routes/userRoutes");
const postRoutes=require("./Routes/postRoutes")

const app=express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: 'http://localhost:5173/login', // Your frontend URL
    credentials: true // Allow credentials (cookies)
}));


app.use("/",userRoutes)

app.use("/",postRoutes);

module.exports=app;