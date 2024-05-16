import { useEffect, useState } from "react";
import { RESAPI_URL } from "../utils/constents";
import { useDispatch } from "react-redux";
import { addRestaurantsFilter, addRestaurantsInfo } from "./reduxStore/restaurantSlice";


const useRestaurants = () => {
  const [restaurantsData, setRestaurantsData] = useState({});
  const dispatch = useDispatch();
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESAPI_URL);
      const json = await response.json();
      setRestaurantsData(json);
      dispatch(addRestaurantsInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
      dispatch(addRestaurantsFilter(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))

    } catch(error) {
      console.error("Error fetching data:", error);
    }
  };

  return { restaurantsData };
};

export default useRestaurants;
