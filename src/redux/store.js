import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from './features/ProductSlice'
import { apiCore } from "./apiServices/apiCore";

export const store =  configureStore({
    reducer:{
        [apiCore.reducerPath]: apiCore.reducer,
        products: productReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiCore.middleware)
})