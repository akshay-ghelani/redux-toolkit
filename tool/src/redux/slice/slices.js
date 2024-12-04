import { createSlice} from "@reduxjs/toolkit";

export const counterslice = createSlice({
    initialState: 0,
    name:'counter',
    reducers:{
        increment:(state) => state + 1,
        decrement:(state) => state - 1,
    },
});
export const {decrement, increment} = counterslice.actions;
export default counterslice.reducer;