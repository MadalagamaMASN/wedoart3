import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import PostCard from "../components/Route/PostCard/PostCard";
import styles from "../styles/styles";


const PostsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const {allPosts,isLoading} = useSelector((state) => state.posts);
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const d = allPosts;
    setData(d);
  }, [allPosts]);
  
  console.log("Data after setting:", data);

  
  return (
  <>
  {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
        {data && data.map((i, index) => <PostCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No posts Found!
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

export default PostsPage;
