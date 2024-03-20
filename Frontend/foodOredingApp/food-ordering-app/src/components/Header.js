import React from "react";
import { LOGO } from "../utils/constents";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleLocation } from "../utils/reduxStore/toggleSlice";
import { CiHome } from "react-icons/ci";
import { CiBurger } from "react-icons/ci";
import { AiOutlinePercentage } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const dispatch = useDispatch();
  const toggleLocatiopnShow = () => {
    dispatch(toggleLocation());
  };
  const cityName = useSelector((store) => store.cityNameReducer.cityName);
  const cartLength = useSelector(
    (store) => store.cartItemsReducer.cartData.length
  );
  console.log("Cart length", cartLength);
  return (
    <div className="w-full flex justify-center items-center bg-black text-white fixed z-10">
      <div className="w-10/12 flex justify-between">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img className="w-36" src={LOGO} />
          </Link>
          <p
            className="px-4 py-1 rounded-full bg-[#0F0F0F] flex items-center justify-between cursor-pointer"
            onClick={toggleLocatiopnShow}
          >
            <FaLocationDot className="mr-2" />
            {cityName ? cityName : "Bhopal"}
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <ul className="flex justify-center items-center text-xl gap-6">
            <Link to={"/"}>
              <li className="hover:text-[#02C243] flex items-center">
                <CiHome /> Home
              </li>
            </Link>
            <li className="hover:text-[#02C243] flex items-center">
              <CiBurger /> Grocery
            </li>
            <li className="hover:text-[#02C243] flex items-center">
              <AiOutlinePercentage /> Offers
            </li>
            <li className="hover:text-[#02C243] flex items-center">
              <CiLogin /> Sign Up
            </li>
            <Link to={"/cart"}>
              <li className="hover:text-[#02C243] flex items-center group">
                <CiShoppingCart /> Cart&nbsp; <span className=" px-2 rounded-full bg-[#02C243] group-hover:text-black">{cartLength}</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
