import React, { useRef } from "react";
import useRestaurants from "../../utils/useRestaurants";
import { CDN_URL } from "../../utils/constents";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const ItemsCarousel = () => {
  const containerRef = useRef();

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

  const { restaurantsData } = useRestaurants();
  if (restaurantsData === null) {
    return <h1>Loading...</h1>;
  }

  const items =
    restaurantsData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
      ?.info || [];

  return (
    <div className="flex flex-col overflow-x-hidden gap-2 mt-5 mb-5">
      <div className="flex justify-between">
        <h1 className="text-xl">What's on your mind?</h1>
        <div className="flex gap-3  ">
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

      <div className="flex overflow-x-hidden gap-1" ref={containerRef}>
        {restaurantsData &&
          //   Array.isArray(items) &&
          items.map((el) => (
            <img
              key={el.id}
              className="w-36 rounded-lg"
              src={CDN_URL + el.imageId}
              alt="items"
              loading="lazy"
            />
          ))}
      </div>
    </div>
  );
};

export default ItemsCarousel;
