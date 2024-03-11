import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import PostDetailsCard from "../PostDetailsCard/PostDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { useEffect } from "react";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings";
import { postData } from "../../../static/data";



const PostCardFeed = ({ data, isEvent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-[400px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
      <Link to={`${isEvent === true ? `/post/${data._id}?isEvent=true` : `/post/${data._id}`}`}>
        <img
          src={`${data.images && data.images[0]?.url}`}
          alt=""
          className="w-full object-cover rounded-lg"
          style={{ height: "400px" }}
        />
      </Link>
      <div className="mt-2">
        <Link to={`/shop/preview/${data?.shop._id}`}>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
      </div>
      <div>
          {open ? <PostDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
    </div>
  );
};


export default PostCardFeed;
