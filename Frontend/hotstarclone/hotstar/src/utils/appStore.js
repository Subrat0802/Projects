import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import topMovies from "./movieSlice";
import infiniteScroll from "./movieSlice";


const appStore = configureStore({
    reducer: {
        
        movies: moviesReducer,
        topMovies: topMovies,
        infiniteScroll : infiniteScroll
       
    }
});

export default appStore;
