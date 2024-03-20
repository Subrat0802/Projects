import React from 'react'
import image from "../utils/783.gif";
import { Link } from 'react-router-dom';

const OrderCon = () => {
  return (
    <div className='w-full h-[100vh] bg-[#121212] flex flex-col justify-center text-xl gap-2 text-white items-center'>
        <div className='spinner'>

        </div>

        <p>Your order is being prepared. Within 15 minutes, our food delivery boy will knock on your door!</p>
        <p>Thank you for choosing Uber Eats!</p>
        <Link to={"/"}><button className='px-4 py-2 bg-green-900 rounded-lg hover:text-black'>Go to home page</button></Link>
    </div>
  )
}

export default OrderCon