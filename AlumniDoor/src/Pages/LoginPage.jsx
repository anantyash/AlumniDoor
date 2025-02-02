import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

import { Link, useNavigate } from "react-router-dom";

import { loginSchema } from "../components/Validating";

import { ALUMNIDOOR38 as loginimg } from "../assets/Images";

import { Button, TextField } from "@mui/material";
import authService from "../services/auth";
import { useUser } from "../context/UserContext";

const initialValues = {
  email: "",
  password: "",
};

function LoginPage() {
  const [userData, setUserData] = useState();
  const { newUser, checkAuth } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // checklogin
    const fetchCurrentUser = async () => {
      const data = await authService.getCurrentUser();
      // console.log("Data: ", data);
      setUserData(data);
    };

    fetchCurrentUser();
  }, []);

  // console.log("user Data: ", userData.email);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        try {
          const session = await authService.login(
            values.email,
            values.password
          );
          console.log(session);
          if (session) {
            const user = await authService.getCurrentUser();
            setUserData(user);
            console.log(userData);
          }
        } catch (error) {
          console.error("Login failed:", error);
        }
        action.resetForm();
        // console.log(values);
      },
    });

  if (userData) {
    newUser({
      id: userData.id,
      userType: userData.userType,
      fullName: userData.fullName,
      email: userData.email,
      phoneNo: userData.phoneNo,
      graduationYear: userData.graduationYear,
      degree: userData.degree,
      currentProfession: userData.currentProfession,
      mentor: userData.mentor,
    });

    checkAuth(true);

    const userId = userData.id;
    // console.log("userID: ", userId);

    navigate(`/door/${userId}`); // for navigate to door page
  }

  return (
    <div className="bg-greenlightColor h-svh flex justify-center items-center ">
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
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 p-5 w-3/4 justify-self-center"
          >
            <TextField
              className=""
              id="email"
              name="email"
              type="email"
              label="Email"
              color="success"
              variant="standard"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              id="password"
              type="password"
              label="Password"
              variant="standard"
              color="success"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
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
            <Button
              variant="contained"
              className="bg-greenColor font-semibold"
              type="submit"
            >
              LogIn
            </Button>
          </form>
          <p className="font-sans text-sm px-2 ">
            Don't have an account?
            <Link to="/signup" className="no-underline px-1">
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
