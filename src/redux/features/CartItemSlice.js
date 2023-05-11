import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalItems : [],
}

const cartItemSlice =  createSlice(
    {
        name: "cartCount",
        initialState,
        reducers:{
            setCartItemCount(state, action){
                state.totalItems = action.payload;
            }
        }
    }
);

export const {setCartItemCount} = cartItemSlice.actions;
export default cartItemSlice.reducer;