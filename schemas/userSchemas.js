const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: { 
    type: String,
    required: true,
  },
  image: { 
    type: String,
    required: true,
  },
  blogs: [
    {
      title: {
        type: String,
        required: true,
      },

      content: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: { type: Date, default: Date.now },
 
});

const User = mongoose.model("User", userSchema);
module.exports = User;
