const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your blog title!"],
  },
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
  shop: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Blog", blogSchema);
