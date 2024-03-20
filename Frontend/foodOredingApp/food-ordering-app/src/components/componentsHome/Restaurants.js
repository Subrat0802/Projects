import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../../utils/Shimmer";
import { addAllRestaurants } from "../../utils/reduxStore/resSlice";
import { Link } from "react-router-dom";
import { TbTopologyStarRing3 } from "react-icons/tb";

const Restaurants = ({ filteredData }) => {
  const [searchInput, setSearchInput] = useState("");
  const restaurants = useSelector(
    (store) => store.allRestaurants.allRestaurants
  );

  const dispatch = useDispatch();

  const searchResHandler = () => {
    const searchRest = filteredData.filter((el) => {
      return el.info.name.toLowerCase().includes(searchInput);
    });
    dispatch(addAllRestaurants(searchRest));
  };

  const cityName = useSelector((store) => store.cityNameReducer.cityName);

  return (
    <div className="w-10/12 mt-5 ">
      <p className="text-2xl mb-2">
        Restaurants with online food delivery in{" "}
        {cityName ? cityName : "Bhopal"}
      </p>
      <div className="w-full p-2 flex justify-between mb-4 ">
        <div className=" w-[70%]">
          <input
            className="text-black border border-[#0F0F0F] rounded-s-full w-[60%] p-2 border-none  "
            placeholder="Search Your Restaurant!"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="border-none ... bg-black text-white p-2 px-4 mr-3 rounded-e-full font-semibold hover:text-[#00C544]"
            onClick={searchResHandler}
          >
            Search
          </button>
          <button
            className="bg-[#00C544] rounded-full p-2 px-4 text-black  font-semibold hover:text-white"
            onClick={() => {
              const filteredRating = filteredData.filter((el) => {
                return el.info.avgRating > 4.3;
              });
              dispatch(addAllRestaurants(filteredRating));
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="flex">
          
          <Link to={"/uberGPT"}>
            <button className="bg-[#c261e9] btn rounded-full p-2 px-4 text-black  font-semibold mr-3  flex justify-center gap-3 items-center">
              Introducing UberGpt <TbTopologyStarRing3 />
            </button>
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 justify-center items-center">
        {restaurants === null ? (
          <Shimmer />
        ) : (
          restaurants.map((el) => (
            <Link key={el.info.id} to={"/restaurantmenu/" + el.info.id}>
              <RestaurantCard data={el} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Restaurants;
