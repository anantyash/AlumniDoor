import React, { useState } from "react";

import loginimg from "../assets/AlumniPics/ALUMNIDOOR (38).png";
import { Button, Divider, IconButton, TextField } from "@mui/material";

// import GoogleIcon from "@mui/icons-material/Google";
// import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPassword] = useState("");

  const handleSubmit = (formdata) => {
    console.log(formdata);
  };

  return (
    <div className="bg-greenlightColor flex justify-center items-center py-10 ">
      <div //For Container
        className=" w-11/12 flex p-3  justify-between "
      >
        {/* For Form */}
        <div className=" md:w-1/2 p-5 text-center shadow-2xl flex flex-col gap-2 items-center bg-white rounded-2xl">
          <h1 className="text-4xl text-greenColor font-sans cursor-default">
            Welcome Back{" "}
          </h1>
          <p className="text-greenColor font-sans pt-2 cursor-default">
            Continue connecting, learning, and growing with your peers.
          </p>

          <form
            action={handleSubmit}
            className="flex flex-col gap-3 p-5 w-3/4 justify-self-center"
          >
            <TextField
              className=""
              id="email"
              type="email"
              label="Email"
              color="success"
              variant="standard"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              id="password"
              type="password"
              label="Password"
              variant="standard"
              color="success"
              value={pwd}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="text-left text-xs font-sans text-blue-600 cursor-pointer">
              Forget Password?
            </p>

            <div className=" text-left justify-center mt-4 ">
              <input id="loggedin" type="checkbox" className="cursor-pointer" />
              <label
                htmlFor="loggedin"
                className="font-sans text-sm px-2 cursor-pointer"
              >
                Keep me logged in
              </label>
            </div>
            <Button variant="contained" className="bg-greenColor font-semibold"
            type="submit"
            >
              LogIn
            </Button>
          </form>
          <p className="font-sans text-sm px-2 ">
            Don't have an account?
            <Link to="/signup" className="no-underline px-2">
              SignUp
            </Link>
          </p>
          {/* <Divider className="text-gray-400 w-4/5 justify-self-center cursor-default my-4">
            or
          </Divider>
          <Button
            variant="outlined"
            className="border-red-600 border-2 border-solid text-red-700 p-2 w-3/4 font-semibold hover:bg-red-700 hover:text-white"
          >
            <GoogleIcon className="px-3" />
            Signin with Google
          </Button>
          <Button
            variant="outlined"
            className="border-black border-2 border-solid text-gray-950 p-2 w-3/4 font-semibold hover:bg-gray-800 hover:text-white"
          >
            <GitHubIcon className="px-3" />
            Signin with GitHub
          </Button> */}
        </div>

        {/* For Image */}
        <div className="w-2/5  hidden md:flex justify-center ">
          <img src={loginimg} alt="Image" className="w-full h-fit" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
