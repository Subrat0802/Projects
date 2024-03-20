import { createSlice } from "@reduxjs/toolkit";

const latlonSlice = createSlice({
    name:"latlon",
    initialState:null,
    reducers: {
        addLatLon: (state, action) => {
            return action.payload
        },    
    }
})
export const {addLatLon} = latlonSlice.actions;
export default latlonSlice.reducer;