import React, { useRef } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const OfferCarousel = ({ data }) => {

    const containerRef = useRef(null);
    // console.log("Hello",containerRef);

    const scrollLeft = () => {
        if(containerRef.current) {
            containerRef.current.scrollBy({
                left: -600,
                behavior: "smooth"
            })
        }
    }

    const scrollRight = () => {
        if(containerRef.current) {
            containerRef.current.scrollBy({
                left: 600,
                behavior: "smooth"
            })
        }
    }

  return (
    <div className="mt-8 flex flex-col overflow-x-hidden select-none">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl">
          Offers Available in Your Area
        </h1>
        <div className="flex gap-3">
            <p className="bg-black rounded-full p-2 cursor-pointer" onClick={scrollLeft}><FaAngleLeft /></p>
            <p className="bg-black rounded-full p-2 cursor-pointer" onClick={scrollRight}><FaAngleRight /></p>
        </div>
      </div>
      <div className="flex flex-row overflow-x-hidden gap-4 select-none " ref={containerRef}>
        {data.map((el, index) => (
          <img key={index} className="w-[70%] md:w-[40%]" src={el} alt="offers" loading="lazy"/>
        ))}
      </div>
    </div>
  );
};
export default OfferCarousel;
