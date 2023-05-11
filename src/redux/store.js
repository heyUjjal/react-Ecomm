import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from './features/ProductSlice'
import cartCountReducer from './features/CartItemSlice'
import { apiCore } from "./apiServices/apiCore";

export const store =  configureStore({
    reducer:{
        [apiCore.reducerPath]: apiCore.reducer,
        products: productReducer,
        cartCount: cartCountReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiCore.middleware)
})