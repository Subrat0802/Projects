import React, { useEffect } from 'react'
import { RESTAURANT_MENU_API } from './constents';
import { useDispatch } from 'react-redux';
import { addRestaurantMenuData } from './reduxStore/restaurantSlice';

const useRestaurantMenu = (id) => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        try{
            const resposne = await fetch(RESTAURANT_MENU_API+id);
            const json = await resposne.json();
            dispatch(addRestaurantMenuData(json.data.cards))
        }catch(error){
            console.log(error);
        }
    }
}

export default useRestaurantMenu