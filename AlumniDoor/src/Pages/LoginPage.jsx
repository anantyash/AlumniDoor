import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

import { Link, useNavigate } from "react-router-dom";

import { loginSchema } from "../components/Validating";

import { ALUMNIDOOR38 as loginimg } from "../assets/Images";

import {
  Alert,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
} from "@mui/material";
import authService from "../services/auth";
import { useUser } from "../context/UserContext";

const initialValues = {
  email: "",
  password: "",
};

function LoginPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const { newUser, checkAuth } = useUser();
  const [loader, setLoader] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    // checklogin session
    fetchCurrentUser();
  }, [loginStatus]);

  const fetchCurrentUser = async () => {
    setLoader(true);
    try {
      const data = await authService.getCurrentUser().then((data) => {
        if (data) {
          setLoginStatus(true);

          // setting up the context api

          newUser({
            id: data.id,
            userType: data.userType,
            fullName: data.fullName,
            email: data.email,
            phoneNo: data.phoneNo,
            graduationYear: data.graduationYear,
            degree: data.degree,
            currentProfession: data.currentProfession,
            mentor: data.mentor,
            gen: data.gender,
            profilePictureUrl:
              data.gender === "female" ? "ALUMNIDOOR39" : "ALUMNIDOOR49",
          });

          checkAuth(true);

          const userId = data.id;
          // console.log("userID: ", userId);

          navigate(`/door/${userId}`); // for navigate to door page
        } else {
          setLoader(false);
        }
      });
    } catch (error) {
      setLoader(false);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        try {
          setLoader(true);
          const session = await authService
            .login(values.email, values.password)
            .then((data) => {
              if (data) {
                fetchCurrentUser();
                setLoginStatus(false);
              } else {
                setLoginStatus(true);
                setLoader(false);
              }
            });
          // .catch((err) => {
          //   console.log("err:", err);
          //   // setLoginStatus(false);
          //   // setLoader(false)
          // });
          // .finally(() => setLoader(false));
          // console.log(session);
          // if (session) {
          //   fetchCurrentUser();
          //   // const user = await authService.getCurrentUser();
          //   // setUserData(user);
          //   // console.log(userData);
          // }
        } catch (error) {
          console.error("Login failed:", error);
          setLoginStatus(true);
        }
        action.resetForm();
        // console.log(values);
      },
    });

  return (
    <div className="bg-greenlightColor h-svh flex justify-center items-center ">
      {loader ? (
        <CircularProgress color="success" />
      ) : (
        <div //For Container
          className=" w-11/12 flex p-3  justify-between "
        >
          <Snackbar
            open={loginStatus}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            // severity="error"
            // message={`Login Failed!`}
          >
            <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
              Login Failed ! Try Again...
            </Alert>
          </Snackbar>

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
                aria-autocomplete="list"
                autoComplete="username"
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
                aria-autocomplete="list"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              {/* <p className="text-left text-xs font-sans text-blue-600 cursor-pointer">
                Forget Password?
              </p> */}

              <div className=" text-left justify-center mt-4 ">
                <input
                  id="loggedin"
                  type="checkbox"
                  className="cursor-pointer"
                />
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
      )}
    </div>
  );
}

export default LoginPage;
