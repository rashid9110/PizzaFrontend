import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
  role: localStorage.getItem('role') || '',
  data: (() => {
    const storedData = localStorage.getItem('data');
    try {
      return storedData ? JSON.parse(storedData) : {};
    } catch (e) {
      console.error('Error parsing data from localStorage:', e);
      return {};  // Return an empty object in case of parsing error
    }
  })(),
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
    return apiResponse; // Return the server's response
  } catch (error) {
    console.error("Error in createAccount:", error);
    // Reject the promise with error details
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const login = createAsyncThunk('/auth/login', async (data) => {
  console.log("incoming data to the thunk", data);
  try {
      const response = axiosInstance.post('/auth/login', data);    
      toast.promise(response, {
          success: (resolvedPromise) => {
              return resolvedPromise?.data?.message;
          },
          loading: 'Hold back tight, we are registering your id...',
          error: 'Ohh No!, Something went wrong. Please try again.',
      });
      const apiResponse = await response;
      return apiResponse;
  } catch(error) {
      console.log(error);
  }
});


export const logout = createAsyncThunk('/auth/logout', async () => {
  console.log("incoming data to the thunk");
  try {
      const response = axiosInstance.post('/auth/logout', );    
      toast.promise(response, {
          success: (resolvedPromise) => {
              return resolvedPromise?.data?.message;
          },
          loading: 'Logging out...',
          error: 'Ohh No!, Something went wrong. Please try again.',
      });
      const apiResponse = await response;
      return apiResponse;
  } catch(error) {
      console.log(error);
  }
});

const  AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
      builder
      .addCase(login.fulfilled,(state,action)=>{
        state.isLoggedIn=true;
        state.role=action?.payload?.data?.data?.userRole;
        state.data=action?.payload?.data?.data?.userData;
        localStorage.setItem('isLoggedIn',true);
        localStorage.setItem('role',action?.payload?.data?.data?.userRole);
        localStorage.setItem('data',JSON.stringify(action?.payload?.data?.data?.userData));
      })
      .addCase(logout.fulfilled,(state,action)=>{
        //reducer which will execute when the logout thenuk is fulfilled
        localStorage.setItem('isLoggedIn',false);
        localStorage.setItem('role','');
        localStorage.setItem('data',JSON.stringify({}));
        state.isLoggedIn=false;
        state.role='';
        state.data={};
      })
    }
})

export default AuthSlice.reducer;