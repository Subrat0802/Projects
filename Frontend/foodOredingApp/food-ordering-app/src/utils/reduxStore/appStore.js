import { configureStore } from "@reduxjs/toolkit"
import resData from "./resSlice"
import toggleLocation  from "./toggleSlice"
import addLatLot from "./resSlice" 
import addMenuData from "./resSlice"
import addCartData from "./cartItemsSlice"

const appStore = configureStore({
    reducer: {
        allRestaurants: resData,
        toggleLocationSideBar: toggleLocation,
        latlotReducer: addLatLot,
        menuDataReducer: addMenuData,
        cartItemsReducer : addCartData,
    }
})

export default appStore