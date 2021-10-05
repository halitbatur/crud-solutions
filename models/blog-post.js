const mongoose = require("mongoose");

const blogAuthor = new mongoose.Schema({
  name: { type: String, required: true },
});

const blogPost = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 120,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [String],
    author: blogAuthor,
  },
  { timestamps: true }
);

module.exports = mongoose.model("blogpost", blogPost);
