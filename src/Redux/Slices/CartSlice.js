import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    cartsData: ''
}

export const addProductToCart = createAsyncThunk('/cart/addProduct', async (productId) => {
    try {
        const response = axiosInstance.post(`/carts/add/${productId}`);
        toast.promise(response, {
            loading: 'Adding product to cart',
            error: 'Something went wrong cannot add product to cart',
            success: 'Product added successfully',
        });
        const apiResponse = await response;
        return apiResponse;
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
});

export const removeProductFromCart = createAsyncThunk('/cart/removeProduct', async (productId) => {
    try {
        const response = axiosInstance.post(`/carts/remove/${productId}`);
        toast.promise(response, {
            loading: 'Removing product from cart',
            error: 'Something went wrong cannot remove product from cart',
            success: 'Product removed successfully',
        });
        const apiResponse = await response;
        return apiResponse;
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
});

export const getCartDetails = createAsyncThunk('/cart/getDetails', async () => {
    try {
        const response = axiosInstance.get(`/carts`);
        toast.promise(response, {
            loading: 'Fetching cart details',
            error: 'Something went wrong cannot fetch cart',
            success: 'Cart fetched successfully',
        });
        const apiResponse = await response;
        return apiResponse;
    } catch(error) {
        console.log(error);
        if(error?.response?.status===401){
            toast.error('Please login to view cart');
            return{
                isUnauthorized:true,
            }
        }
        toast.error('Something went wrong');
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            console.log("clearCart reducer executed", state.cartsData); // Before
            state.cartsData = '';
            console.log("State after clearing cart:", state.cartsData); // After
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCartDetails.fulfilled, (state, action) => {
            state.cartsData = action?.payload?.data?.data;
        });

    }
});

export const { clearCart } = cartSlice.actions; // Export the clearCart action

export default cartSlice.reducer;