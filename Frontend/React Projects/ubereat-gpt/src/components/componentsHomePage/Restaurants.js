import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantsCards from "./RestaurantsCards";
import { addRestaurantsInfo } from "../../utils/reduxStore/restaurantSlice";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const dispatch = useDispatch();
  const [searchtext, setSearchText] = useState("");

  const { allRestauratsFilter, allRestauratsInfo } = useSelector(
    (el) => el.restsReducer
  );

  const handleSearchres = () => {
    const searchRes = allRestauratsFilter.filter((el) => {
        return el.info.name.toLowerCase().includes(searchtext.toLowerCase());
    })
    dispatch(addRestaurantsInfo(searchRes));
  };

  return (
    <div>
      <h1 className="text-xl mt-3 mb-2">Rstaurants available in your area </h1>
      <div className=" w-[70%] mb-5">
        <input
          className="text-black border border-[#0F0F0F] rounded-s-full w-[60%] p-2 border-none  "
          placeholder="Search Your Restaurant!"
          value={searchtext}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="border-none ... bg-black text-white p-2 px-4 mr-3 rounded-e-full font-semibold hover:text-[#00C544]"
          onClick={handleSearchres}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filteredRating = allRestauratsFilter.filter((el) => {
              return el.info.avgRating > 4.3;
            });
            dispatch(addRestaurantsInfo(filteredRating));
          }}
          className="bg-[#00C544] rounded-full p-2 px-4 text-black  font-semibold hover:text-white"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {allRestauratsInfo === null ? (
          <h1>Loading...</h1>
        ) : (
          allRestauratsInfo.map((el) => (
            <Link to={`/menu/${el.info.id}`}><RestaurantsCards key={el.info.id} data={el.info} /></Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Restaurants;
