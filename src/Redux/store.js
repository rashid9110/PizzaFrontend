import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import ProductSliceReducer from "./Slices/ProductSlices";

export const store =configureStore({
    reducer:{
        auth:AuthSliceReducer,
        product:ProductSliceReducer,
    },
    devTools:true,
});