import React, { useState } from "react";
import { IMAGES1, IMAGES2 } from "../../utils/images";
import Marquee from "react-fast-marquee";

const CarouselInfinite = () => {
  return (
    <>
      <Marquee autoFill pauseOnHover direction="left" speed={40}>
        <div className="flex overflow-y-hidden gap-2  no-scrollbar">
          {IMAGES1.map((el, index) => (
            <div key={index} className="relative group">
              <img
                className="lg:w-96 sm:w-40 cursor-pointer hover:opacity-65 rounded-lg mt-5 ml-2"
                src={el}
              />
            </div>
          ))}

          <button className="bold text-8xl text-[#F2F2F2]">Watch Now</button>
        </div>
      </Marquee>
      <Marquee autoFill pauseOnHover direction="left">
        <div className="flex overflow-y-hidden gap-2 no-scrollbar">
          {IMAGES2.map((el, index) => (
            <img key={index}
              className="lg:w-96 cursor-pointer rounded-lg mt-5 ml-2 "
              src={el}
            />
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default CarouselInfinite;
