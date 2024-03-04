import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constents";
import { useDispatch } from "react-redux";
import { addMenuData } from "../utils/reduxStore/resSlice";
import RestaurantInfo from "../components/componentMenu/RestaurantInfo";
import Shimmer from "../utils/Shimmer";
import RestaurantCatagory from "../components/componentMenu/RestaurantCatagory";

const MenuPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { resId } = useParams();
  const fetchMenu = async () => {
    setLoading(true);
    try {
      const response = await fetch(RESTAURANT_MENU_API + resId);
      const json = await response.json();
      console.log(json);
      dispatch(addMenuData(json.data));
      setLoading(false);
    } catch (error) {
      console.log("Errro", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="pt-16 bg-[#121212] w-full min-h-[100vh]">
      <div className=" mb-3 flex text-gray-600 w-10/12 mt-10 mx-auto">
        <Link className="hover:text-[#04BD41]" to={"/"}>
          <p>Home/</p>
        </Link>
        <p>Items</p>
      </div>
      {loading ? <Shimmer /> : <RestaurantInfo />}
    </div>
  );
};

export default MenuPage;
