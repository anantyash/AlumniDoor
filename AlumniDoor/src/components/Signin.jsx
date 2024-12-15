import React, { useState } from "react";
import logo from "../assets/logo.png";
import connect from "../assets/connect.png";

function Signin() {
  const [userName, setUserName]= useState('')
  const [password, setPassword]= useState('')

  const handleSubmit=(e)=> {
    e.preventDefault()
    // prevent the page from reloding
  }

  return (
    <div
    // For background
      className="bg-white h-lvh flex justify-center text-center p-4"  
    >
      <div 
      // For Container
      className="bg-green-100/[0.8] sm:w-5/6 min-h-fit grid grid-cols-2 rounded-md shadow-lg py-8 px-4 gap-4 justify-center ">

        <div 
        //For Left Part
        className="  h-full hidden sm:block rounded-lg"> 
         

          <img // for logo
            src={logo}
            alt="Logo"
            className="  rounded-xl "
          />

          <img 
            src={connect}
            alt="Image"
            className=" h-96 rounded-xl"
          />
        </div>

        <div 
        // For Right Part
        className="">
        
          <div className="my-9">
            <h1 className=" text-2xl lg:text-5xl font-bold">Welcome Back!</h1>
            <p className="text-sm lg:text-lg">Sign in to your account..</p>
          </div>

          <form action="#" method="POST" className="space-y-4 mt-6 shadow-md p-4">
           
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900 text-left"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={userName}
                  onChange={(e)=>{setUserName(e.target.value)}}
                  required
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
          </form>

          {/* seperator */}
          <div className="flex items-center justify-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
          </div>

        {/* "Continue with..." Buttons */}
          <div className="flex flex-col space-y-2">
              <button  // For Google
                type="button"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Continue with Google
              </button>
              <button  // For Github
                type="button"
                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Continue with GitHub
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
