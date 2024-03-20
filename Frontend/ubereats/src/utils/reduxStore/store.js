import { configureStore } from "@reduxjs/toolkit";
import latlonSlice from "./latlonSlice";

const appStore = configureStore({
    reducer: {
        latlon: latlonSlice,
    }
});

export default appStore;
