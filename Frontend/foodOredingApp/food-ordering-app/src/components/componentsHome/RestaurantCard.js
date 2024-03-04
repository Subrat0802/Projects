import React from "react";
import { CDN_URL } from "../../utils/constents";
import { FaStar } from "react-icons/fa";

const RestaurantCard = ({ data }) => {
  const { cloudinaryImageId, avgRating, name, sla, cuisines, costForTwo, locality} =
    data.info;
  const subName = `${name.substring(0, 17)}`;
  const threeDot = () => {
    if (subName.length > 16) {
      return `...`;
    }
  };
  return (
    <div className="hover:scale-95 hover:duration-200 lg:min-h-[360px] transition-all duration-200 hover:bg-transparent hover:shadow-lg w-[100%] bg-black rounded-xl text-white  hover:text-green-500 cursor-pointer">
      <div className="h-48">
        <img
          className="h-full w-full rounded-t-xl object-cover"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="p-2 text-start">
        <p className="text-2xl font-semibold">
          {subName}
          <span className="text-pure-greys-300">{threeDot()}</span>
        </p>
        <div className="flex">
          <p className="flex items-center">
            <FaStar className="text-yellow-400" />
            {avgRating}&nbsp;&nbsp;{" "}
          </p>
          <p>{sla.deliveryTime} mins</p>
        </div>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        {/* <p>{locality}</p> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
