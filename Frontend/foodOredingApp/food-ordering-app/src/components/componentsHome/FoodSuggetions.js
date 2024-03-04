import React, { useRef } from "react";
import { CDN_URL } from "../../utils/constents";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const FoodSuggetions = ({ data }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col w-10/12   text-xl mt-3">
      <div className="flex justify-between items-center mb-2">
        <p className="">Subrat, what's on your mind?</p>
        <div className="flex gap-3">
          <p
            className="bg-black rounded-full p-2 cursor-pointer"
            onClick={scrollLeft}
          >
            <FaAngleLeft />
          </p>
          <p
            className="bg-black rounded-full p-2 cursor-pointer"
            onClick={scrollRight}
          >
            <FaAngleRight />
          </p>
        </div>
      </div>
      <div
        className="flex overflow-x-hidden gap-2   w-full "
        ref={containerRef}
      >
        {data.map((el) => {
          return (
            <img
              className="w-32 rounded-lg"
              key={el.id}
              src={CDN_URL + el.imageId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodSuggetions;
