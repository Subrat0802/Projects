import { createSlice } from "@reduxjs/toolkit";

const resData = createSlice({
    name:"resSlice",
    initialState:{
        allRestaurants: null,
        latlot: null,
        menuData: null,
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
        }

    }
})

export const {addAllRestaurants, addLatLot, addMenuData} = resData.actions;
export default resData.reducer;
