import { createSlice } from "@reduxjs/toolkit";
const cartItems = createSlice({
    name:"cartData",
    initialState:{
        cartData: []
    },
    reducers: {
        addCartData: (state, action) => {
            state.cartData.push(action.payload);
        }
    }
})
export const {addCartData} = cartItems.actions;
export default cartItems.reducer;