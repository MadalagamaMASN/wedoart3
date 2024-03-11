import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  posts: [], // Ensure the key is 'posts'
  isLoading: true,
  error: null,
};

export const postReducer = createReducer(initialState, {
  postCreateRequest: (state) => {
    state.isLoading = true;
  },
  postCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.post = action.payload;
    state.success = true;
  },
  postCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all products of shop
  getAllPostsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllPostsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.posts = action.payload;
  },
  getAllPostsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete product of a shop
  deletePostRequest: (state) => {
    state.isLoading = true;
  },
  deletePostSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deletePostFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all products
  getAllPostsRequest: (state) => {
    state.isLoading = true;
  },
  getAllPostsSuccess: (state, action) => {
    state.isLoading = false;
    state.allPosts = action.payload;
  },
  getAllPostsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  clearErrors: (state) => {
    state.error = null;
  },
});
