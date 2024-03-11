import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[1px] md:grid-cols-2 md:gap-[1px] lg:grid-cols-4 lg:gap-[1px] xl:grid-cols-5 xl:gap-[1px]">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-[200px] flex items-center justify-between cursor-pointer overflow-hidden"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                  style={{
                    backgroundImage: `url(${i.image_Url})`,
                    backgroundSize: 'cover',

                  }}
                  
                >
                  <h5 style={{ fontSize: '28px', fontWeight: 'bold', color: 'black', backgroundColor: 'white', 
                  padding: '1px', textAlign: 'center', fontFamily: 'serif'
                  }}>{i.title}</h5>

                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
