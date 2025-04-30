import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import ProductSliceReducer from "./Slices/ProductSlices";
import CartSliceReducer from "./Slices/CartSlice";
import OrderSliceReducer from "./Slices/OrderSlice";
import AddProductSliceReducer from "./Slices/addproductSlice";

export const store =configureStore({
    reducer:{
        auth:AuthSliceReducer,
        product:ProductSliceReducer,
        cart:CartSliceReducer,
        order:OrderSliceReducer,
        addProduct:AddProductSliceReducer,
    },
    devTools:true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ 
          serializableCheck: false,
        }),
});