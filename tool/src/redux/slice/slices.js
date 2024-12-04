import { createSlice} from "@reduxjs/toolkit";

export const couunterslice = createSlice({
    initialState:0,
    name:'counter',
    reducers:{
        increment:(state) => state + 1,
        decrement:(state) => state - 1,
    },
});
export const {decrement, increment}=couunterslice.actions;
export default couunterslice.reducer;