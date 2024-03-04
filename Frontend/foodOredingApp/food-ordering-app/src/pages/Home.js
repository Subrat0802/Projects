import React, { useEffect, useState } from "react";
import OfferCarousel from "../components/componentsHome/OfferCarousel";
import { CAROUSEL_OFFERS_IMG } from "../utils/mockData";
import FoodSuggetions from "../components/componentsHome/FoodSuggetions";
import { RESTAURANTS_API } from "../utils/constents";
import Restaurants from "../components/componentsHome/Restaurants";
import { useDispatch, useSelector } from "react-redux";
import { addAllRestaurants } from "../utils/reduxStore/resSlice";
import Location from "../components/componentsHome/Location";

const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [foodSuggetion, setFoodSuggetion] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLaoding] = useState(false);
  const locationSelector = useSelector(
    (store) => store.toggleLocationSideBar.showLocationSideBar
  );
  const latlot = useSelector((store) => store.latlotReducer.latlot);
  console.log(latlot);

  const fetchApi = async () => {
    try {
      setLaoding(true);
      let apiUrl = RESTAURANTS_API;
      if (latlot && latlot.lat && latlot.lon) {
        apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latlot.lat}&lng=${latlot.lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      }
      const data = await fetch(apiUrl);
      const json = await data.json();
      setFoodSuggetion(
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
      setFilteredData(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      dispatch(
        addAllRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        )
      );
      setLaoding(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [latlot]);

  return (
    <div className="bg-[#0F0F0F] w-full min-h-[100vh] pt-16 text-white flex flex-col items-center">
      {/* location sidebar  */}
      {locationSelector && (
        <div className="fixed w-[25%] h-[97vh] bg-black left-0">
          <Location />
        </div>
      )}

      {/* //Offers carousel  */}
      <OfferCarousel data={CAROUSEL_OFFERS_IMG} />

      {/* food suggetions  */}
      <FoodSuggetions data={foodSuggetion} />

      {/* restaurants section  */}
      <Restaurants filteredData={filteredData}/>
    </div>
  );
};

export default Home;
