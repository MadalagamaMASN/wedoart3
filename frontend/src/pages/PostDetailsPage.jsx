import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import PostDetails from "../components/Posts/PostDetails";
import { useSelector } from "react-redux";

const PostDetailsPage = () => {
  const { allPosts } = useSelector((state) => state.posts);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
 

  useEffect(() => {
    const postData = allPosts && allPosts.find((i) => i._id === id);
    setData(postData);
  }, [allPosts, id]);

  return (
    <div>
      <Header />
      <PostDetails data={data} />
      <Footer />
    </div>
  );
};

export default PostDetailsPage;
