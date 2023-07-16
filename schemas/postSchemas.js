const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },

  userId: Number,
  tags: [String, String, String],
  createdAt: { type: Date, default: Date.now },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
