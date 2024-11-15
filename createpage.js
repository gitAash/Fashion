import React from 'react';

const SignupPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center bg-blue-50">
        <img 
          src="https://t4.ftcdn.net/jpg/04/38/79/77/360_F_438797706_xoI5otnII0fhYyqqVVYhUXUE67bRgbNU.jpg" // replace with the actual image path
          alt="Illustration" 
          className="w-3/4 h-auto" 
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-3/4 max-w-md">
          <button className="text-gray-600 mb-4 text-left">
            &lt; Go Back
          </button>
          
          <h1 className="text-4xl font-bold">Create Account,</h1>
          <p className="text-gray-500 mb-6">Sign up to get started</p>
          
          {/* Form Fields */}
          <form className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center mb-4">
              <span className="mr-2 text-gray-500">Remember me</span>
              <input
                type="checkbox"
                className="toggle-checkbox"
                // Customize as per Tailwind settings or custom styling
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Continue
            </button>
          </form>

          {/* Google Sign-In */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="flex items-center justify-center w-full py-3 border rounded-lg text-gray-700 hover:bg-gray-100">
            <img
              src="https://img1.pnghut.com/3/13/18/fHfaBUFZg4/google-logo-sign-trademark-brand.jpg" // Google logo URL
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
