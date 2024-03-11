import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import BlogDetails from "../components/Blogs/BlogDetails.jsx";
import { useSelector } from "react-redux";

const BlogDetailsPage = () => {
  const { allBlogs } = useSelector((state) => state.blogs);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
 

  useEffect(() => {
    const blogData = allBlogs && allBlogs.find((i) => i._id === id);
    setData(blogData);
  }, [allBlogs, id]);

  return (
    <div>
      <Header />
      <BlogDetails data={data} />
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
