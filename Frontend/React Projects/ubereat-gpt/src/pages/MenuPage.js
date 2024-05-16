import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constents";
import { addMenuItemsData } from "../utils/reduxStore/restaurantSlice";
import MenuItems from "../components/componentsMenuPage/MenuItems";

const MenuPage = () => {
  const { id } = useParams();
  useRestaurantMenu(id);
  const dispatch = useDispatch();
  const menuInfo = useSelector((store) => store.restsReducer.restaurantMenuData);
  

  if (!menuInfo) return <h1>Loading...</h1>;

  const menuItem = menuInfo[2]?.card?.card?.info;
  if (!menuItem) return <h1>Menu item data not available</h1>;

  const {
    name,
    locality,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    cloudinaryImageId,
    sla,
  } = menuItem;

  const resItems =
  menuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
  menuInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

if (resItems) {
  const ResCategories = resItems.filter((item) => {
    return item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  })
  dispatch(addMenuItemsData(ResCategories));
}


  return (
    <div className="min-h-[100vh] text-white w-7/12 mx-auto pt-36 pb-14">
      <h1 className="text-3xl font-semibold text-[#00C544]">{name}</h1>
      <div className="flex w-[100%] min-h-28 rounded-md mt-3 shadow-xl justify-between">
        <div className="">
          <div className="flex gap-2">
            <p>{avgRating}</p>
            <p>({totalRatingsString})</p>
            <p>{costForTwoMessage}</p>
          </div>
          <p>{cuisines.join(", ")}</p>
          <div>
            <p>Outlet - {locality}</p>
          </div>
          <p>{sla.slaString}</p>
        </div>
        <img className="h-28 w-36 object-cover" src={CDN_URL + cloudinaryImageId} alt="Restaurant" />
      </div>
      <div>
        <MenuItems/>
      </div>
    </div> 
  );
};

export default MenuPage;
