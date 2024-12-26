const postModel = require("../Models/postModel");

const createPost=async (req, res) => {
    const { title, content, author } = req.body;

    const createdPost = postModel.create({
        title, content, author
    })
    res.status(201).json({ message: 'Post Created'});
}

const home=async (req,res)=>{
    const data=await postModel.find();
    res.send(data);
}

module.exports={
    createPost,
    home
}