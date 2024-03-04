import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Shimmer from "../../utils/Shimmer";
import { CDN_URL } from "../../utils/constents";
import RestaurantCatagory from "./RestaurantCatagory";

const RestaurantInfo = () => {
  const [loading, setLoading] = useState(true);
  const [resCategory, setResCategory] = useState([]);
  const [showIndex, setShowIndex] = useState(null);
  console.log(resCategory);

  const resInfo = useSelector((store) => store.menuDataReducer.menuData);
  const info = resInfo?.cards[0]?.card?.card?.info || {};

  useEffect(() => {
    if (resInfo) {
      const ResCategories =
        resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setResCategory(ResCategories);
      setLoading(false);
    }
  }, [resInfo]);
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const {
    name = "",
    cuisines = [],
    costForTwoMessage = "",
    city = "",
    locality = "",
    cloudinaryImageId = "",
  } = info;

  return loading || !resInfo ? (
    <Shimmer />
  ) : (
    <div>
      <div className="text-white mt-6 w-8/12 mb-5 mx-auto border border-[#181818]  pb-2 flex justify-between items-center shadow-md ">
        <div>
          <p className="text-4xl font-semibold">{name}</p>
          <div className="pt-2 pl-1 font-semibold">
            <p className="text-[#02B23E]">{cuisines.join(", ")}</p>
            <p className="text-[#02B23E]">{costForTwoMessage}</p>
            <p className="text-[#02B23E]">
              {locality}, {city}
            </p>
          </div>
        </div>
        <div className="w-[15%] rounded-lg">
          <img
            className="rounded-lg object-cover w-full h-36"
            src={CDN_URL + cloudinaryImageId}
            alt="Restaurant"
          />
        </div>
      </div>
      <div className="pb-10">
      {resCategory.map((el, index) => {
          return (
            <RestaurantCatagory 
              key={index}
              data={el.card?.card}
              showItems={index === showIndex ? true : false}
              showIndex
            //   itemLength={restaurantData.length}
              setShowIndex={() => setShowIndex(showIndex === null ? index : null)}
            />
          );
        })}
      </div>
      
    </div>
  );
};

export default RestaurantInfo;
