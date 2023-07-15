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
  blog: [
    {
      id: {
        type: Number,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
