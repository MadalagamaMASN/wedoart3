import axios from "axios";
import { server } from "../../server";


// create blog
export const createBlog =
  (
    name,
    description,
    shopId,
    images
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "blogCreateRequest",
      });

      const { data } = await axios.post(
        `${server}/blog/create-blog`,
        { name, description, shopId, images } // Send parameters as an object
      );
      
      dispatch({
        type: "blogCreateSuccess",
        payload: data.blog,
      });
    } catch (error) {
      dispatch({
        type: "blogCreateFail",
        payload: error.response.data.message,
      });
    }
  };

// get All Blogs of a shop
export const getAllBlogsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllBlogsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/blog/get-all-blogs-shop/${id}`
    );
    dispatch({
      type: "getAllBlogsShopSuccess",
      payload: data.blogs,
    });
  } catch (error) {
    dispatch({
      type: "getAllBlogsShopFailed",
      payload: error.response.data.message,
    });
  }
};

// delete blog of a shop
export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteBlogRequest",
    });

    const { data } = await axios.delete(
      `${server}/blog/delete-shop-blog/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteBlogSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteBlogFailed",
      payload: error.response.data.message,
    });
  }
};

// get all blogs
export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllBlogsRequest",
    });

    const { data } = await axios.get(`${server}/blog/get-all-blogs`);
    dispatch({
      type: "getAllBlogsSuccess",
      payload: data.blogs,
    });
  } catch (error) {
    dispatch({
      type: "getAllBlogsFailed",
      payload: error.response.data.message,
    });
  }
};
