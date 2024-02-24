import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: "url(https://img.hotimg.com/New-Project-5.png)",
      }}
    >
      <div
        className={`relative min-h-[70vh] 800px:min-h-[80vh] ${styles.section} w-[90%] 800px:w-[60%]`}
      >
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[Henri-Didot] font-[1000] capitalize text-right`}
        >
          <br />
        </h1>
        <p className="pt-5 text-[16px] font-[Henri-Didot] font-[400] text-[#000000ba] text-right">
          Welcome to WeDoArt.lk! We're your gateway to the rich tapestry of Sri
          Lankan craftsmanship, connecting rural artisans with global
          enthusiasts. Our platform empowers artisans, fosters community, and
          celebrates the timeless beauty of authentic Sri Lankan artistry.
        </p>
        <Link to="/products" className=".inline-block flex justify-end">
          <div className={`${styles.button} mt-5 ml-auto`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
