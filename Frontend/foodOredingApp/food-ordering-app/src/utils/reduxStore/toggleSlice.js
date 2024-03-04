import { createSlice } from "@reduxjs/toolkit"


const toggleSideBars = createSlice({
    name:"toggles",
    initialState:{
        showLocationSideBar:false
    },
    reducers: {
        toggleLocation: (state) => {
            state.showLocationSideBar = !state.showLocationSideBar
        }
    }
})


export const {toggleLocation} = toggleSideBars.actions;
export default toggleSideBars.reducer;