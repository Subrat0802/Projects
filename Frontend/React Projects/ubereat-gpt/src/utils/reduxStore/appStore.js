import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";


const appStore = configureStore({
    reducer: {
        restsReducer: restaurantSlice
    }
})

export default appStore