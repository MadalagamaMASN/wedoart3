import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
  return (
    <div className="w-full h-[90vh] bg-black shadow-sm overflow-y-scroll sticky top-0 left-0 z-10 font-poppins">
      {/* single item */}
      <div className="w-full flex items-center p-4 ">
        <Link to="/dashboard" className="w-full flex items-center">
          <RxDashboard size={18} color={`${active === 1 ? "#555" : "#fff"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[15px] font-[600] ${
              active === 1 ? "text-[#555]" : "text-[#fff]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-blogs" className="w-full flex items-center">
          <CiSettings size={18} color={`${active === 20 ? "#555" : "#fff"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[15px] font-[600] ${
              active === 20 ? "text-[#555]" : "text-[#fff]"
            }`}
          >
            all blogs
          </h5>
        </Link>
      </div>


      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-create-product"
          className="w-full flex items-center"
        >
          <AiOutlineFolderAdd
            size={18}
            color={`${active === 4 ? "#555" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[15px] font-[600] ${
              active === 4 ? "text-[#555]" : "text-[#fff]"
            }`}
          >
            Create Product
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-create-post" className="w-full flex items-center">
          <AiOutlineFolderAdd
            size={18}
            color={`${active === 12 ? "#555" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[15px] font-[600] ${
              active === 12 ? "text-[#555]" : "text-[#fff]"
            }`}
          >
            Create Post
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-create-blog" className="w-full flex items-center">
          <AiOutlineFolderAdd
            size={18}
            color={`${active === 15 ? "#555" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[15px] font-[600] ${
              active === 15 ? "text-[#555]" : "text-[#fff]"
            }`}
          >
            Post Blog
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <VscNewFile size={18} color={`${active === 6 ? "#555" : "#fff"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[15px] font-[600] ${
              active === 6 ? "text-[#555]" : "text-[#fff]"
            }`}
          >
            Create Event
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-withdraw-money"
          className="w-full flex items-center"
        >
          <CiMoneyBill size={18} color={`${active === 7 ? "#555" : "#fff"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[15px] font-[600] ${
              active === 7 ? "text-[#555]" : "text-[#fff]"
            }`}
          >
            Withdraw Money
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-coupouns" className="w-full flex items-center">
          <AiOutlineGift
            size={18}
            color={`${active === 9 ? "#555" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[15px] font-[600] ${
              active === 9 ? "text-[#555]" : "text-[#fff]"
            }`}
          >
            Discount Codes
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={18}
            color={`${active === 10 ? "#555" : "#fff"}`}
          />
           <h5
            className={`hidden 800px:block pl-2 text-[15px] font-[600] ${
              active === 5 ? "text-[#555]" : "text-[#fff]"
            }`}
          >
           Refunds
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/settings" className="w-full flex items-center">
          <CiSettings size={18} color={`${active === 11 ? "#555" : "#fff"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[15px] font-[600] ${
              active === 11 ? "text-[#555]" : "text-[#fff]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>
      
    </div>
  );
};

export default DashboardSideBar;
