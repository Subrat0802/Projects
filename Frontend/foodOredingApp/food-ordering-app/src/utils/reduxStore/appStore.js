import { configureStore } from "@reduxjs/toolkit"
import resData from "./resSlice"
import toggleLocation  from "./toggleSlice"
import addLatLot from "./resSlice" 
import addMenuData from "./resSlice"
import addCartData from "./cartItemsSlice"
import addCityName from "./resSlice"
import addGptSuggetions from "./gptSlice"

const appStore = configureStore({
    reducer: {
        allRestaurants: resData,
        toggleLocationSideBar: toggleLocation,
        latlotReducer: addLatLot,
        menuDataReducer: addMenuData,
        cartItemsReducer : addCartData,
        cityNameReducer : addCityName,
        gptSuggetionReducer: addGptSuggetions
    }
})

export default appStore