import React from 'react'
import { CDN_URL } from '../../utils/constents';

const RestaurantsCards = ({data}) => {

    console.log(data);

    const {name, cloudinaryImageId, cuisines, sla, avgRating } = data;

  return (
    <div className='bg-[#181717] rounded hover:scale-95 duration-200 cursor-pointer'>
        {/* <img src={CDN_URL + data.info.cloudinaryImageId}/> */}
        <img className='w-[100%] h-48 object-cover rounded-t' src={CDN_URL+cloudinaryImageId} loading='lazy' alt='resImg'/>
        <p className='text-2xl'>{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating + " "} Rating</p>
        <p>{sla.deliveryTime} Minutes</p>
    </div> 
  )
}

export default RestaurantsCards