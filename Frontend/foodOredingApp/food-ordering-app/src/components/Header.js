import React from "react";
import { LOGO } from "../utils/constents";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleLocation } from "../utils/reduxStore/toggleSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleLocatiopnShow = () => {
    dispatch(toggleLocation());
  };

  return (
    <div className="w-full flex justify-center items-center bg-black text-white fixed z-10">
      <div className="w-10/12 flex justify-between">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img className="w-36" src={LOGO} />
          </Link>
          <p className="px-4 py-1 rounded-full bg-[#0F0F0F] flex items-center justify-between cursor-pointer" onClick={toggleLocatiopnShow}>
            <FaLocationDot className="mr-2"  />Bhopal
            </p>
        </div>
        <div className="flex justify-center items-center ">
          <ul className="flex justify-center items-center gap-6">
            <Link to={"/"}><li className="hover:text-[#02C243]">Home</li></Link>
            <li>Grocery</li>
            <li>Offers</li>
            <li>SignUp</li>
            <Link to={"/cart"}><li>Cart</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
