const express = require('express');
const { createPost, home } = require("../Controllers/BlogConrollers");
const router = express.Router();
const authMiddleware = require("../Middlewares/authMiddleWare");

//protected routes;
router.post("/addblog", createPost)

router.get("/", home);

module.exports = router;