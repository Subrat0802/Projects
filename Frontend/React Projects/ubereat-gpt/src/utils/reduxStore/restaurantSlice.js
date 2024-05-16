import { createSlice } from "@reduxjs/toolkit";


const restaurantSlice = createSlice({
    name:"resSlice",
    initialState:{
        allRestauratsInfo:null,
        allRestauratsFilter:null,
        restaurantMenuData:null,
        restaurantsMenuItems:null,
        toCartData:[]
    },
    reducers:{
        addRestaurantsInfo: (state, action) => {
            state.allRestauratsInfo = action.payload
        },
        
        addRestaurantsFilter: (state, action) => {
            state.allRestauratsFilter = action.payload
        },
        addRestaurantMenuData: (state, action) => {
            state.restaurantMenuData = action.payload
        },
        addMenuItemsData: (state, action) => {
            state.restaurantsMenuItems = action.payload
        },
        addToCartData: (state, action) => {
            state.toCartData.push(action.payload)
        }
    }
})

export const { addRestaurantsInfo, addRestaurantsFilter, addRestaurantMenuData, addMenuItemsData, addToCartData} = restaurantSlice.actions;
export default restaurantSlice.reducer;