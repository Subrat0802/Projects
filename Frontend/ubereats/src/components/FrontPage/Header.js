import React, { useEffect, useState } from "react";
import { LOGO } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addLatLon } from "../../utils/reduxStore/latlonSlice";
import { Link } from "react-router-dom";


const Header = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [cityName, setCityName] = useState("")
  const dispatch = useDispatch();
  const location = useSelector(store => store.latlon)  
  console.log(location)

  const API_KEY = "a07e04b484e939163e460aef2c19f501";

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );
        const jsonData = await response.json();
        dispatch(addLatLon(jsonData.coord))

        const restaurantData = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );
        const jsonRestaurantData = await restaurantData.json();
        console.log(jsonRestaurantData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCityData();
  }, [cityName]); // Include city in dependency array to rerun effect when city changes

  const handleSignUpFormShow = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  const handleLoginFormShow = (e) => {
    e.preventDefault()
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="flex justify-center relative">
      <img
        className="object h-[100vh] w-full"
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/c413f20400e04805.webp"
        alt="Background"
      />
      <div className="w-10/12 flex justify-between items-center absolute py-6">
        <div className="flex gap-4">
          <img src={LOGO} alt="Logo" />
        </div>
        <div className="z-20">
          <button
            onClick={handleSignUpFormShow}
            className="bg-black ml-5 text-white text-lg font-semibold rounded-full px-4 py-2 cursor-pointer"
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="absolute w-10/12 flex justify-between">
        <div className="pt-64">
          <h2 className="text-6xl font-semibold">Order delivery near you</h2>
          <div className="">
            <input
              placeholder="Enter Your Delivery Address"
              className="w-[50%] mt-10 py-3 px-4 mr-6"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            <Link to={"/restaurants"}><button className="text-white bg-black py-3 px-6">Search</button></Link>
          </div>
        </div>
        {showSignUpForm && (
          <div className=" transition-all duration-200 w-[35%] h-96 mt-40 bg-opacity-20 bg-black">
            <form className="w-full h-full flex flex-col justify-center gap-2 items-center">
              <p className="text-4xl mb-4 font-semibold">
                {showLoginForm ? "Login" : "Sign Up"}
              </p>
              {!showLoginForm && (
                <input
                  placeholder="Enter Your Name"
                  className="py-2 px-4 w-[80%]"
                />
              )}
              <input
                placeholder="Enter Your Email"
                className="py-2 px-4 w-[80%]"
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="py-2 px-4 w-[80%]"
              />
              <input
                className="bg-black text-white py-2 px-4 w-[80%] cursor-pointer hover:bg-[#0a0a0a]"
                type="submit"
              />
              <p
                onClick={handleLoginFormShow}
                className="cursor-pointer text-white font-bold group "
              >
                {showLoginForm ? "New To Uber? " : "Already Registered? " }<span className="group-hover:text-black">{showLoginForm ? "Sign Up " : "Login" }</span> 
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
