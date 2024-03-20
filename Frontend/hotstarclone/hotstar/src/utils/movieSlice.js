import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        topRated : null,
        infiniteScroll:[]
    },
    reducers:{
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTopRated : (state, action) => {
            state.topRated = action.payload
        },
        addInfiniteScroll : (state, action) => {
            state.infiniteScroll = action.payload
        }
        
    }
    
})

export const {addNowPlayingMovies, addTopRated, addInfiniteScroll} = moviesSlice.actions;
export default moviesSlice.reducer;