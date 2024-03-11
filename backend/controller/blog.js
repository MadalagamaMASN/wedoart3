const express = require("express");
const { isSeller, isAuthenticated, isAdmin } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const router = express.Router();
const Blog = require("../model/blog");
const Order = require("../model/order");
const Shop = require("../model/shop");
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/ErrorHandler");

// create post
router.post(
  "/create-blog",
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
            folder: "blogs",
          });

          imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
          });
        }

        const blogData = req.body;
        blogData.images = imagesLinks;
        blogData.shop = shop;

        const blog = await Blog.create(blogData);

        res.status(201).json({
          success: true,
          blog,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get all blogs of a shop
router.get(
  "/get-all-blogs-shop/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const blogs = await Blog.find({ shopId: req.params.id });

      res.status(201).json({
        success: true,
        blogs,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get all blogs
router.get(
  "/get-all-blogs",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const blogs = await Blog.find().sort({ createdAt: -1 });

      res.status(201).json({
        success: true,
        blogs,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

module.exports = router;
