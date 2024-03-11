import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import PostDetailsCard from "../PostDetailsCard/PostDetailsCard";


const PostCard = ({ data, isEvent }) => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
    
      <div className="w-full h-300 bg-white rounded-lg shadow-sm p-1 relative cursor-pointer border border-gray-300 flex" 
      style={{ width: '210px', height: '210px' }}>
  <Link
    to={`${isEvent === true ? `/post/${data._id}?isEvent=true` : `/post/${data._id}`}`}
  >
    <div className="w-full h-full overflow-hidden " 
    style={{ width: '200px', height: '200px' }}>
      <img
        src={`${data.images && data.images[0]?.url}`}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  </Link>
       
        <div>{open ? <PostDetailsCard setOpen={setOpen} data={data} /> : null}</div>
      </div>
     
    </>
  );
};

export default PostCard;
