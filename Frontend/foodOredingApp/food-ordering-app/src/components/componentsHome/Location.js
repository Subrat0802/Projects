import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addCityName, addLatLot } from '../../utils/reduxStore/resSlice';

const Location = () => {
    const [cityName, setCityName] = useState("");
    const [cityNameLatLot, setCityNameLatLot] = useState("Bhopal"); // Default city
    const dispatch = useDispatch();

    const API_KEY = "a07e04b484e939163e460aef2c19f501";
    
    const fetchCityData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameLatLot}&appid=${API_KEY}&units=metric`);
            const json = await response.json();
            dispatch(addLatLot(json.coord));
        } catch (error) {
            console.log(error, "error");
        }
    }

    useEffect(() => {
        fetchCityData();
    }, [cityNameLatLot]); 

    const handleInputChange = (e) => {
        setCityName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCityNameLatLot(cityName); 
        dispatch(addCityName(cityName))
        setCityName(""); 

    }

    return (
        <div className='flex flex-col justify-center items-center mt-28 gap-3 z-50 scale-100'>
            <FaLocationDot className="text-8xl" />
            <label>Search Your Location</label>
            <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                <input value={cityName} className='rounded-xl py-2 bg-[#1b1b1b] px-6' onChange={handleInputChange} />
                <input type='submit' className='bg-[#02B23E] w-20 py-1 rounded-lg mt-2 text-black hover:bg-[#1b1b1b] hover:text-white' />
            </form>
        </div>
    )
}

export default Location;

















