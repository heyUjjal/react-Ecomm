import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    featuredProducts: [],


}

const productSlice = createSlice(
    {
        name:"products",
        initialState,
        reducers:{
            setProductlist(state, action){
                //  console.log(action.payload)
                if(action.payload){
                    state.products = action.payload;
                }

            } ,

            setFeaturedProducts(state, action){
                state.featuredProducts = action.payload?.filter((currEle) => {
                    return currEle?.featured === true
                })

            }
        }
    }
)

export const {setProductlist} = productSlice.actions;
export const {setFeaturedProducts} = productSlice.actions;
export default productSlice.reducer;