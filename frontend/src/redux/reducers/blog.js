import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  blogs:[],
  blog:[],
  isLoading: false,
};

export const blogReducer = createReducer(initialState, {
  blogCreateRequest: (state) => {
    state.isLoading = true;
  },
  blogCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.blog = action.payload;
    state.success = true;
  },
  
  blogCreateFail: (state, action) => {
    console.log("blogCreateFail", state, action.payload);
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all blogs of shop
  getAllBlogsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllBlogsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.blogs = action.payload;
  },
  getAllBlogsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete blog of a shop
  deleteBlogRequest: (state) => {
    state.isLoading = true;
  },
  deleteBlogSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteBlogFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all blogs
  getAllBlogsRequest: (state) => {
    state.isLoading = true;
  },
  getAllBlogsSuccess: (state, action) => {
    state.isLoading = false;
    state.allBlogs = action.payload;
  },
  getAllBlogsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  clearErrors: (state) => {
    state.error = null;
  },
});
