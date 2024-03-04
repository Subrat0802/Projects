import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Shimmer from "../utils/Shimmer";
import CartItems from "../components/componentCart/CartItems";
import CartBilling from "../components/componentCart/CartBilling";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems =
    useSelector((store) => store.cartItemsReducer.cartData) || null;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return cartItems === null ? (
    <Shimmer />
  ) : (
    <div className="w-full min-h-[100vh] bg-[#121212] pt-4">
      <div className="w-10/12 mx-auto mt-20 text-white flex justify-between">
        <div className="w-[40%] min-h-[100vh] ">
          <div className=" mb-3 flex text-gray-600 ">
            <Link className="hover:text-white" to={"/"}>
              <p>Home/</p>
            </Link>
            <Link to={"/"}>
              <p>Items</p>
            </Link>
          </div>
          {cartItems.map((el) => {
            return <CartItems key={el.id} data={el} />;
          })}
        </div>
        <div className="w-[40%] min-h-[100vh] ">
          <CartBilling />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
