const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel=require("../Models/userModel");
const registration=async (req,res)=>{
    const { username, email, password } = req.body;

    try{
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: 'User already exists' });
        }
        bcrypt.hash(password, 10,  async function(err, hash) {
            const user=await userModel.create({
                username,
                email,
                password:hash,
            })
        });
        let token=jwt.sign({email:email,userid:user._id},process.env.JWT_SECRET);
        res.cookie("token",token);
        res.redirect("/");
    } catch(e){
        res.status(500).json({ message: 'Error registering user', error: e });
    }
}

const login=async (req,res)=>{
    const { username, password } = req.body;
    const user= await userModel.findOne({username});
    if(!user){
        res.send("User does not exists");
    }
    bcrypt.compare(password, hash, function(err, result) {
        if(result==true){
            let token=jwt.sign({email:email,userid:user._id},process.env.JWT_SECRET);
            res.cookie("token",token);
            res.redirect("/");
        } else {
            res.send("something went wrong");
        }
    });
}

module.exports={
    registration,
    login
}