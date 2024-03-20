import React from "react";
import { LOGO } from "../../utils/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full flex justify-center py-4 shadow-lg">
      <div className="flex justify-between w-11/12 items-center">
        <div className="flex gap-4 items-center w-[70%]">
          <GiHamburgerMenu className="text-xl font-bold cursor-pointer" />
          <Link to={"/restaurants"}>
            <img className="object" src={LOGO} alt="Background" />
          </Link>
          <p className="bg-[#E8E8E8]  px-6 rounded-full py-1 flex items-center">
            <IoLocationSharp className="mr-2"/>
            BHOPAL
          </p>
          <div className="w-[70%] ">
            <input
              placeholder="Search Restaurants"
              className="bg-[#E8E8E8]  w-[80%] py-1 px-2 rounded-l-full"
            />
            <button className="bg-[#E8E8E8] hover:bg-[#d4d3d3]  w-[15%] py-1 px-4 rounded-r-full text-[#9CA3AF]">
              Search
            </button>
          </div>
        </div>
        <div>
          <ul className="flex gap-6">
            <Link to={"/"}><li className="cursor-pointer text-lg ">Home</li></Link>
            <Link to={"/restaurants/secondpage"}><li className="cursor-pointer text-lg">Offers</li></Link>
            <li className="cursor-pointer text-lg">Grocery</li>
            <li className="cursor-pointer text-lg">SignUp</li>
            <li className="cursor-pointer text-lg">Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
