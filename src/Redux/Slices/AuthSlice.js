import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState ={
    isLoggedIn:localStorage.getItem('isLoggedIn')=='true'||'false',
    role:localStorage.getItem('role')||'',
    data:JSON.parse(localStorage.getItem('data'))||{},
};
export const createAccount = createAsyncThunk('/auth/createAccount', async (data, { rejectWithValue }) => {
    try {
      const response = axiosInstance.post('/User', data); // Post request
      toast.promise(response, {
        success: (resolvedPromise) => resolvedPromise?.data?.message || "Registration successful!",
        loading: "Hold back tight, we are registering your account",
        error: "Oh no! Something went wrong. Please try again.",
      });
      const apiResponse = await response; // Await the promise
      return apiResponse.data; // Return the server's response
    } catch (error) {
      console.error("Error in createAccount:", error);
      // Reject the promise with error details
      return rejectWithValue(error.response?.data || error.message);
    }
  });
  
const  AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
})

export default AuthSlice.reducer;