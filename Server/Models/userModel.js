const mongoose=require("mongoose");

const userModel=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    post:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"post"
        }
    ]
})

module.exports=mongoose.model("user",userModel);