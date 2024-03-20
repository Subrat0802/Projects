import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptSuggetion:null,
    },
    reducers:{
        addGptSuggetions : (state, action) => {
            state.gptSuggetion = action.payload
        },
    }
})

export const {addGptSuggetions} = gptSlice.actions;
export default gptSlice.reducer