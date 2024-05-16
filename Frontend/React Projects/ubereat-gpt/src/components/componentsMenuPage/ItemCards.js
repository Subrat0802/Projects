import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = ({ data, showItems, showIndex, setShowIndex, itemLength }) => {
  const handleClick = () => {
    setShowIndex(showIndex === null ? data.index : null)
  };

  // Add a null check for data.itemCards
  const itemCount = data.itemCards ? data.itemCards.length : 0;

  return (
    <div className=" mx-auto p-2 mb-3 text-pure-greys-200 text-white">
      {/* accordian header  */}
      <div
        className="flex justify-between items-center text-xl font-bold group p-3 cursor-pointer hover:text-pure-greys-5 border-b border-[#1d1d1d] border-pure-greys-800 hover:bg-black rounded-md"
        onClick={handleClick}
      >
        <span>{data.title} ({itemCount})</span>
        <FaAngleDoubleDown className={showItems ? "text-[#00C544] transform rotate-180" : "transform rotate-0"} />
      </div>
      {/* accordian body  */}
      <div className={`overflow-hidden transition-max-height ease-in-out duration-1000 ${showItems ? `max-h-[${itemLength*200}px]` : "max-h-0"}`}>
        {showItems ? (
          <RestaurantItemList items={data.itemCards} />
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
