import React from "react";
import { FaApple } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-[#141414]  fixed top-0 z-10">
      <div className=" bg-[#141414] py-5 text-[#D0D0D0] w-9/12 mx-auto flex justify-between text-[12px] items-center">
        <Link to="/">
          <img
            width={50}
            src="https://is1-ssl.mzstatic.com/image/thumb/oEYYIjc6-3zT0jgpyUiIaw/1x40at.png"
          />
        </Link>
        <div className="flex w-[80%] justify-between items-center invisible lg:visible">
          <p>Store</p>
          <p>Mac</p>
          <p>iPad</p>
          <p>iPhone</p>
          <p>Watch</p>
          <p>AirPods</p>
          <p>TV & Home</p>
          <p>Entertainment</p>
          <p>Support</p>
          <p className="bg-[#F2F2F2] text-[#1D1D1F] rounded-full px-2 text-[12px] py-[2px]">
            Stream Now
          </p>
        </div>

        <IoSearch className="text-[17px] " />
        <IoBagOutline className="text-[18px] " />
      </div>
    </div>
  );
};

export default Navbar;
