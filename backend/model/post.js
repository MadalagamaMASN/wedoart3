const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "Please enter your product description!"],
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
  
});

module.exports = mongoose.model("Post", postSchema);
