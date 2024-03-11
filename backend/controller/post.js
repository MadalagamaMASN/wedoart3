const express = require("express");
const { isSeller, isAuthenticated, isAdmin } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const router = express.Router();
const Post = require("../model/post");
const Order = require("../model/order");
const Shop = require("../model/shop");
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/ErrorHandler");

// create post
router.post(
  "/create-post",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("Shop Id is invalid!", 400));
      } else {
        let images = [];

        if (typeof req.body.images === "string") {
          images.push(req.body.images);
        } else {
          images = req.body.images;
        }

        const imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
          const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "posts",
          });

          imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
          });
        }

        const postData = req.body;
        postData.images = imagesLinks;
        postData.shop = shop;

        const post = await Post.create(postData);

        res.status(201).json({
          success: true,
          post,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get all posts of a shop
router.get(
  "/get-all-posts-shop/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const posts = await Post.find({ shopId: req.params.id });

      res.status(201).json({
        success: true,
        posts,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get all posts
router.get(
  "/get-all-posts",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const posts = await Post.find().sort({ createdAt: -1 });

      res.status(201).json({
        success: true,
        posts,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

module.exports = router;
