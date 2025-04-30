import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

// Async thunk to add product
export const addProduct = createAsyncThunk('/product/addProduct', async (formData, { rejectWithValue }) => {
  try {
    const response = axiosInstance.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    toast.promise(response, {
      loading: 'Adding new product...',
      success: 'Product added successfully!',
      error: 'Failed to add product',
    });

    const result = await response;
    return result.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Something went wrong');
    return rejectWithValue(error?.response?.data);
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetAddProductState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload?.message || 'Failed to add product';
      });
  },
});

export const { resetAddProductState } = productSlice.actions;
export default productSlice.reducer;
