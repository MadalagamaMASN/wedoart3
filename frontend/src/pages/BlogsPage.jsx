import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import BlogCard from "../components/Route/BlogCard/BlogCard";
import styles from "../styles/styles";


const BlogsPage = () => {
    const [searchParams] = useSearchParams();
    const categoryData = searchParams.get("category");
    const {allBlogs,isLoading} = useSelector((state) => state.blogs);
    const [data, setData] = useState([]);
  
    
    useEffect(() => {
      const d = allBlogs;
      setData(d);
    }, [allBlogs]);
    
    console.log("Data after setting:", data);

  return (
  <>
  {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
        {data && data.map((i, index) => <BlogCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No blogs Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
    )
  }
  </>
  );
};

export default BlogsPage;
