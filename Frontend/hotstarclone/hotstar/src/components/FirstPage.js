import React, { useEffect, useRef } from "react";
import Navbar from "./FirstPage/Navbar";

import CarouselInfinite from "./FirstPage/CarouselInfinite";
import BackgroudVideo from "./FirstPage/BackgroudVideo";
import Devices from "./FirstPage/Devices";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="overflow-x-hidden no-scrollbar ">
      <Navbar />
      <BackgroudVideo />
      <div className="w-full   z-2 -mt-20 absolute bg-black">
        <CarouselInfinite />
        <div className="flex justify-center items-center py-7 ">
          <Link to={"/moviePage"}><button className="border hover:border-[#b8b7b7] hover:text-[#b8b7b7]  text-[#D0D0D0] py-2 px-6 rounded-full ">
            See full lineup{" "}
          </button></Link>
        </div>
      </div>

      <div className="w-full pt-40 flex flex-col justify-center items-center ">
        <Devices />
      </div>

      <div className="mx-auto   w-full p-3 bg-[#F5F5F7]">
        <div className="flex w-full h-full bg-[#F5F5F7] px-24 my-24 ">
          <img
            className="w-[50%] "
            src="https://www.apple.com/v/apple-tv-plus/ah/images/overview/bundle__e93qdcv7mtm6_large_2x.jpg"
          />
          <div className="w-[50%] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center font-semibold text-3xl ">
              <img
                className="w-7"
                src="https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-footer/breadcrumbs/apple/icon_large.svg"
              />
              <p>One</p>
            </div>
            <p className="text-center mt-4 font-semibold text-xl text-[#323232] w-[70%]">
              Bundle Apple TV+ with up to five other great services. And enjoy
              more for less.
            </p>
            <button className="py-2 px-5 mt-3 bg-[#323232] text-white rounded-full font-semibold">Try apple one free<sup>4</sup></button>
            <p className="text-blue-500 mt-3">Learn More {">"}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
