const mongoose = require("mongoose");

const post = new mongoose.Schema(
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
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", post);
