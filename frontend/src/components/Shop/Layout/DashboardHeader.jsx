import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { BiBookHeart, BiBookOpen } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-black shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img src="https://i.postimg.cc/tg17Twyf/New-Project-16.png" alt="" />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">

        <FiPackage color="#fff" size={18} className="mx-5 cursor-pointer" />
          <Link to="/dashboard-orders" className="800px:block hidden">
           <h5 className={`font-[600] text-[15px] text-[#fff]`}>
            All Orders
          </h5>
          </Link>

        <FiShoppingBag
              color="#fff"
              size={18}
              className="mx-5 cursor-pointer"/>
          <Link to="/dashboard-products" className="800px:block hidden" >
             <h5 className={`font-[600] text-[15px] text-[#fff]`}>
            All Products     
          </h5>
          </Link>
          
          <BiBookHeart
              color="#fff"
              size={18}
              className="mx-5 cursor-pointer"/>
          <Link to="/dashboard-posts" className="800px:block hidden" >
             <h5 className={`font-[600] text-[15px] text-[#fff]`}>
            All Posts     
          </h5>
          </Link>


          <BiBookOpen
              color="#fff"
              size={18}
              className="mx-5 cursor-pointer"/>
          <Link to="/dashboard-blogs" className="800px:block hidden" >
             <h5 className={`font-[600] text-[15px] text-[#fff]`}>
            All Blogs    
          </h5>
          </Link>
          <AiOutlineGift
              color="#fff"
              size={18}
              className="mx-5 cursor-pointer"
            />

          <Link to="/dashboard/cupouns" className="800px:block hidden">
          <h5 className={`font-[600] text-[15px] text-[#fff]`}>
            All Cupons
          </h5>
            
          </Link>
          <MdOutlineLocalOffer
              color="#fff"
              size={18}
              className="mx-5 cursor-pointer"
            />
          <Link to="/dashboard-events" className="800px:block hidden">
          <h5 className={`font-[600] text-[15px] text-[#fff]`}>
            All Events
          </h5>
           
          </Link>
          <BiMessageSquareDetail
              color="#fff"
              size={18}
              className="mx-5 cursor-pointer"
            />
          <Link to="/dashboard-messages" className="800px:block hidden">
          <h5 className={`font-[600] text-[15px] text-[#fff]`}>
            Messages
          </h5>
            
          </Link>
          <h5 className={`font-[600] text-[15px] text-[#000]`}>
                 .........
          </h5>
          <Link to={`/shop/${seller._id}`}>
         
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
