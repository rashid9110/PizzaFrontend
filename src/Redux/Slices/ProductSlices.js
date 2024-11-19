import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";

const initialState={
    productsData:[],//array of products
}

export const getAllProducts=createAsyncThunk('/products/getAll',async()=>{
    try {
        const products=axiosInstance.get('/products');
        toast.promise(products,{
            loading:'Loading all the products',
            error:'some thing went cannot load all the products',
            success:'Product loaded successfully'
        });
        const apiResponse=await products;
        return apiResponse;
    } catch (error) {
        console.error(error)
        toast.error('Something went wrong')
    }
})

export const getproductDetails = createAsyncThunk('/products/getDetails', async (id) => {
    try {
        const product = axiosInstance.get(`/products/${id}`);
        toast.promise(product, {
            loading: 'Loading the product',
            error: 'Something went cannot load product',
            success: 'Product loaded successfully',
        });
        const apiResponse = await product;
        return apiResponse;
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
});

const ProductSlice = createSlice({
    name:'Product',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
          console.log(action.payload);
          state.productsData=action?.payload?.data?.data;
       })
    }
})

export default ProductSlice.reducer;