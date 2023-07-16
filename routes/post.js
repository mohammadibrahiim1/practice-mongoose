const express = require("express");
// const mongoose = require("mongoose");

const { postController } = require("../controllers/post.controller");

const router = express.Router();
router.post("/post", postController.createPost);
router.put("/post", postController.updatePost);
router.delete("/post/:id", postController.deletePost);

module.exports = router;
