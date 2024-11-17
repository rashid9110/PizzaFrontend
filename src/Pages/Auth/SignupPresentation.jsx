import { Link } from "react-router-dom";

function SignUpPresentation({handelUserInput, handleFormSubmit}){
    return (
        <>
          <section className="text-gray-600 body-font">
            <div className="flex flex-wrap items-center h-screen px-10 py-6 mx-auto">
                <div className=" hidden p-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 md:block">
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="751.57"
      height="539.42"
      viewBox="0 0 751.57 539.42"
    >
      <path
        d="m19.9,538.23c0,.66.53,1.19,1.19,1.19h729.29c.66,0,1.19-.53,1.19-1.19s-.53-1.19-1.19-1.19H21.09c-.66,0-1.19.53-1.19,1.19Z"
        fill="#3f3d58"
      />
      <path
        d="m253.43,95.15H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18ZM19.53,64.79c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z"
        fill="#e2e3e4"
      />
      <path
        d="m253.43,284.5H19.53c-8.65,0-15.68-7.03-15.68-15.68s7.03-15.68,15.68-15.68h233.9c8.65,0,15.68,7.03,15.68,15.68s-7.03,15.68-15.68,15.68Z"
        fill="#6c63ff"
      />
      <path
        d="m176.78,31.36H15.68C7.03,31.36,0,24.33,0,15.68S7.03,0,15.68,0h161.1c8.65,0,15.68,7.03,15.68,15.68s-7.03,15.68-15.68,15.68Z"
        fill="#e2e3e4"
      />
      <path
        d="m253.43,158.43H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18Zm-233.9-30.36c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z"
        fill="#e2e3e4"
      />
      <path
        d="m253.43,221.72H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18Zm-233.9-30.36c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z"
        fill="#e2e3e4"
      />
      <path
        d="m11.49,51.17h61.3c1.46,0,2.65,1.18,2.65,2.65h0c0,1.46-1.19,2.65-2.65,2.65H11.49c-1.46,0-2.65-1.18-2.65-2.65h0c0-1.46,1.19-2.65,2.65-2.65Z"
        fill="#e2e3e4"
      />
      <path
        d="m11.49,115.95h61.3c1.46,0,2.65,1.18,2.65,2.64h0c0,1.46-1.19,2.65-2.65,2.65H11.49c-1.46,0-2.65-1.18-2.65-2.64h0c0-1.46,1.19-2.65,2.65-2.65Z"
        fill="#e2e3e4"
      />
      <path
        d="m11.49,180.74h61.3c1.46,0,2.65,1.18,2.65,2.65h0c0,1.46-1.19,2.64-2.65,2.64H11.49c-1.46,0-2.65-1.18-2.65-2.65h0c0-1.46,1.19-2.64,2.65-2.64Z"
        fill="#e2e3e4"
      />
      <g>
        <polygon
          points="447.08 132.26 424.72 139.62 424.72 107.43 445.01 107.43 447.08 132.26"
          fill="#9f616a"
        />
        <circle cx="427.49" cy="94.06" r="22.28" fill="#9f616a" />
        <path
          d="m433.61,91.85c-3.73-.11-6.18-3.88-7.63-7.32s-2.94-7.39-6.4-8.81c-2.83-1.16-7.82,6.69-10.05,4.6-2.33-2.18-.06-13.37,2.41-15.38,2.47-2.01,5.85-2.4,9.03-2.55,7.76-.36,15.57.27,23.18,1.86,4.71.98,9.55,2.46,12.95,5.86,4.3,4.32,5.4,10.83,5.71,16.92.32,6.23-.04,12.75-3.07,18.2s-9.37,9.47-15.45,8.08c-.61-3.3.01-6.69.25-10.05.23-3.35-.01-6.97-2.06-9.64-2.04-2.67-6.42-3.73-8.8-1.36"
          fill="#2f2e43"
        />
        <path
          d="m461.02,99.57c2.23-1.63,4.9-3,7.64-2.66,2.96.36,5.47,2.8,6.23,5.69s-.09,6.07-1.93,8.43c-1.83,2.36-4.56,3.92-7.44,4.7-1.67.45-3.5.64-5.09-.04-2.34-1.01-3.61-4-2.69-6.38"
          fill="#2f2e43"
        />
        <g>
          <path
            id="uuid-6e6e0b91-3370-44b7-bb91-7676be28b2e9-2"
            fill="#e2e3e4"
            d="m370.19,181.16c6.43-10.77,13.57-21.52,21.62-31.03,11.8-13.35,23.55-26.69,35.29-39.66"
          />
        </g>
      </g>
    </svg>
    
                </div>
              
    
              <form className="flex flex-col w-full p-8 mt-10 bg-gray-200 rounded-lg lg:2/6 md:w-1/3 md:ml-auto md:mt-0">
                <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">
                  Sign Up
                </h2>
                {/* First name */}
                <div className="relative mb-4">
                  <label
                    htmlFor="First Name"
                    className="text-sm leading-7 text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    onChange={handelUserInput}
                    minLength={5}
                    placeholder="Rashid"
                    className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border-gray-300
                     rounded outline-none focus:border-yellow-200"
                  />
                </div>
    
                {/* Email*/}
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={handelUserInput}
    
                    placeholder="Rashid@gmail.com"
                    className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border-gray-300
                     rounded outline-none focus:border-yellow-200"
                  />
                </div>
                {/* Mobile number */}
    
                <div className="relative mb-4">
                  <label
                    htmlFor="mobilNumber"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Mobile Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobilNumber"
                    name="mobilNumber"
                    required
                    onChange={handelUserInput}
    
                    maxLength={12}
                    placeholder="Enter 10 digit mobile number"
                    className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border-gray-300
                     rounded outline-none focus:border-yellow-200"
                  />
                </div>
                {/* password */}
                <div className="relative mb-4">
                  <label
                    htmlFor="password"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    onChange={handelUserInput}
    
    
                    placeholder="Enter your password"
                    className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border-gray-300
                     rounded outline-none focus:border-yellow-200"
    
                  />
                </div>
    
                <button onClick={handleFormSubmit} className="w-full px-8 py-2 text-lg text-white bg-yellow-500 border-0 rounded focus-outline-none hover:bg-yellow-600">
                  Create Account
                </button>
    
                <p className="mt-3 text-sx text-gray-500 ">
                  Already have an account{" "}
                  <Link to="/auth/login" className="text-yellow-500">
                      Login
                    </Link>
                </p>
              </form>
            </div>
          </section>
        </>
      );
}

export default SignUpPresentation