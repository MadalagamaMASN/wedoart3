import axios from "axios";
import { server } from "../../server";

// create post
export const createPost =
  (
    description,
    shopId,
    images
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "postCreateRequest",
      });

      const { data } = await axios.post(
        `${server}/post/create-post`,
        
        description,
        shopId,
        images,
      );
      dispatch({
        type: "postCreateSuccess",
        payload: data.post,
      });
    } catch (error) {
      dispatch({
        type: "postCreateFail",
        payload: error.response.data.message,
      });
    }
  };

// get All Posts of a shop
export const getAllPostsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllPostsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/post/get-all-posts-shop/${id}`
    );
    dispatch({
      type: "getAllPostsShopSuccess",
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: "getAllPostsShopFailed",
      payload: error.response.data.message,
    });
  }
};

// delete post of a shop
export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deletePostRequest",
    });

    const { data } = await axios.delete(
      `${server}/post/delete-shop-post/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deletePostSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deletePostFailed",
      payload: error.response.data.message,
    });
  }
};

// get all posts
export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllPostsRequest",
    });

    const { data } = await axios.get(`${server}/post/get-all-posts`);
    dispatch({
      type: "getAllPostsSuccess",
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: "getAllPostsFailed",
      payload: error.response.data.message,
    });
  }
};
