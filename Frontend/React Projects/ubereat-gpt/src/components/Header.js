import React from "react";
import { LOGO } from "../utils/constents";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { CiBurger } from "react-icons/ci";
import { AiOutlinePercentage } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  

  return (
    <div className="w-full flex justify-center items-center bg-black text-white fixed z-10 top-0">
      <div className="w-10/12 flex justify-between">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img className="w-36" src={LOGO} alt="Logo" />
          </Link>
          
        </div >
        <div className="flex justify-center items-center ">
          <ul className="hidden md:flex  justify-center items-center text-xl gap-6">
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
                <CiShoppingCart /> Cart
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
