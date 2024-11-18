import { useState } from "react";
import toast from "react-hot-toast";
import SignUpPresentation from "./SignupPresentation";
import { useDispatch } from "react-redux";
import { createAccount } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
function Signup() {
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const [signUpState,setSignUpState] =useState({
    firstName:'',
    email:'',
    mobilNumber:'',
    password:'',
  });

  function handelUserInput(e) {
    const {name,value}=e.target;
    console.log(name, value);

    
    setSignUpState({...signUpState,[name]:value});
  }
  
  async function handleFormSubmit(e) {
    e.preventDefault();//prevent the form reloading the page
    console.log(signUpState)

    //Add validations for the form input
    if(!signUpState.email || !signUpState.mobilNumber || !signUpState.password|| !signUpState.firstName){
     toast.error("Missing value for the form")
      return;
    }
    if(signUpState.firstName.length<5){
      toast.error("First should be atleast 5 characters long and maximum 20 characters long")
      return;
    }

    //check email 
    if(!signUpState.email.includes('@') || !signUpState.email.includes('.')){
      toast.error("Invalid email address")
      return;
    }

    //check mobile number

    if(signUpState.mobilNumber.length<10||signUpState.mobilNumber.length>12){
      toast.error("Moblile number should between 10 and 12 characters long")
      return
    }
    const apiRespose = await dispatch(createAccount(signUpState))
    console.log("API response is", apiRespose)
    console.log("success",apiRespose.payload.success)
    if(apiRespose.payload.data.success){
        navigate('/auth/login')
    }
  }
return(
  <SignUpPresentation
     handelUserInput={handelUserInput}
     handleFormSubmit={handleFormSubmit}
  />
)
}

export default Signup;
