import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../../server";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
import Ratings from "../Products/Ratings";

const ShopInfo = ({ isOwner }) => {
  const [data, setData] = useState({});
  const { products } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    setIsLoading(true);
    axios
      .get(`${server}/shop/get-shop-info/${id}`)
      .then((res) => {
        setData(res.data.shop);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`, {
      withCredentials: true,
    });
    window.location.reload();
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-black">
          <div className="w-full py-5 ">
            <div className="ml-4 w-full flex items-center justify-between">
              <img
                src={`${data.avatar?.url}`}
                alt=""
                className="ml-4 w-[75px] h-[75px] object-cover rounded-full"
              />

              <div className="ml-1 text-white"></div>
              <div className="ml-1 font-[600] text-white">200 Followers</div>
              <div className="ml-4 font-[600] text-white"> </div>
            </div>

            <h3 className="ml-4 text-left py-2 text-[20px] text-white">{data.name}</h3>
            <p className="text-[16px] text-white p-[10px] flex items-center">
              {data.description}
            </p>
          </div>
          <div className="p-3">
            <h5 className="font-[600] text-white">Address</h5>
            <h4 className="text-white">{data.address}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600] text-white">Phone Number</h5>
            <h4 className="text-white">{data.phoneNumber}</h4>
          </div>

          <div className="p-1">
            <div className="flex text-white">
              <Ratings rating={averageRating} />
            </div>
          </div>
          <div className="p-1">
            <h4 className="text-white text-[10px]">
              Joined On {data?.createdAt?.slice(0, 10)}
            </h4>
          </div>
          {isOwner && (
            <div className="py-3 px-4">
              <Link to="/settings">
                <div
                  className={`${styles.button} !w-full !h-[42px] !rounded-[5px] bg-white`}
                >
                  <span className="text-black bg-white">Edit Shop</span>
                </div>
              </Link>
              <div
                className={`${styles.button} !w-full !h-[42px] !rounded-[5px] bg-white`}
                onClick={logoutHandler}
              >
                <span className="text-black bg-white">Log Out</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShopInfo;

/*
<div className="p-3">
        <h5 className="font-[600]">Total Products</h5>
        <h4 className="text-[#000000a6]">{products && products.length}</h4>
      </div>*/
