import { createSlice } from "@reduxjs/toolkit";

const resData = createSlice({
    name:"resSlice",
    initialState:{
        allRestaurants: null,
        latlot: null,
        menuData: null,
        cityName:null
    },
    reducers:{
        addAllRestaurants : (state, action) => {
            state.allRestaurants = action.payload
        },
        addLatLot: (state, action) => {
            state.latlot = action.payload
        },
        addMenuData: (state, action) => {
            state.menuData = action.payload
        },
        addCityName: (state, action) => {
            state.cityName = action.payload
        }

    }
})

export const {addAllRestaurants, addLatLot, addMenuData, addCityName} = resData.actions;
export default resData.reducer;
