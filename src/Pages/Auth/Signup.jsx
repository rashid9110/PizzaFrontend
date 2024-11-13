import { useState } from "react";
import toast from "react-hot-toast";
import SignUpPresentation from "./SignupPresentation";
function Signup() {
  const [signUpState,setSignUpState] =useState({
    firstName:'',
    email:'',
    mobileNumber:'',
    password:'',
  });
  function handelUserInput(e) {
    const {name,value}=e.target;
    setSignUpState({...signUpState,[name]:value});
  }
  function handleFormSubmit(e) {
    e.preventDefault();//prevent the form reloading the page
    console.log(signUpState)

    //Add validations for the form input
    if(!signUpState.email || !signUpState.mobileNumber || !signUpState.password|| !signUpState.firstName){
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

    if(signUpState.mobileNumber.length<10||signUpState.mobileNumber.length>12){
      toast.error("Moblile number should between 10 and 12 characters long")
      return
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
