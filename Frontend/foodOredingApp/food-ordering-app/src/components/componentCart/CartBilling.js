import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartBilling = () => {
  const cartItems =
    useSelector((store) => store.cartItemsReducer.cartData) || null;
  const [totalBill, setTotalBill] = useState(0);
  const fetchTotalPrice = useSelector(
    (store) => store.cartItemsReducer.cartData
  );

  useEffect(() => {
    let total = 0;
    total += fetchTotalPrice
      .map((el) => {
        return el.defaultPrice || el.price;
      })
      .reduce((acc, curr) => acc + curr, 0);
    setTotalBill(total / 100);
  }, [fetchTotalPrice]);

  return (
    <div className="p-4 text-white bg-[#222222] rounded-lg shadow-xl">
      <p className="text-3xl font-bold">Billing Details</p>
      <div className="flex justify-between mt-3">
        <p>Item Total</p>
        <p>₹ {totalBill}</p>
      </div>
      <div className="flex justify-between">
        <p>Delivery partner fee</p>
        <p>₹ 15</p>
      </div>
      <div className="border w-full border-[#000000] mt-2 mb-2"></div>
      <div className="flex justify-between">
        <p>Delivery Tip</p>
        <p className="text-[#00C544]">Add tip</p>
      </div>
      <div className="flex justify-between">
        <p>Platform fee</p>
        <p>₹ 5.003</p>
      </div>
      <div className="flex justify-between">
        <p>GST and Restaurant Charges</p>
        <p>₹ 13.94</p>
      </div>
      <div className="border border-white mt-3"></div>
      <div className="flex justify-between">
        <p className="font-bold">TO PAY</p>
        <p className="font-bold">
          ₹ {(totalBill + 15 + 5.003 + 13.94).toFixed(2)}
        </p>
      </div>
      <div className=" flex flex-col items-start gap-2 mt-2">
      <div className="flex gap-2">
          <input name="payment" value="upi" type="radio"  /> <label htmlFor="payment">UPI/Net banking</label>
        </div>
        <div className="flex gap-2">
          <input name="payment" value="cash" type="radio" /> <label htmlFor="payment">Cash on delivery</label>
        </div>
        <div className="flex gap-2">
          <input name="payment" type="radio" value="wallet" /> <label htmlFor="payment">Wallet</label>
        </div>
      </div>
      <Link to={"/orderconfirm"}><button className="hover:bg-[#205531] w-full py-3 mt-4 text-2xl font-semibold rounded-lg bg-[#00C544] hover:underline-offset-1">
        Order Now! || PAY ₹{(totalBill + 15 + 5.003 + 13.94).toFixed(2)}
      </button></Link>
    </div>
  );
};

export default CartBilling;
