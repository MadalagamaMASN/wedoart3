const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "Please enter your post description!"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  
});

module.exports = mongoose.model("Post", postSchema);
