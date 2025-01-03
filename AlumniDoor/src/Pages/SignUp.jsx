import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import signup from "../assets/AlumniPics/ALUMNIDOOR (2).png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Backdrop,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// Using Yup to validate Input Fields
export const userSchema = Yup.object({
  userType: Yup.string()
    .nonNullable()
    .required("Option must be selected")
    .matches(/[Alumni,Student]/),

  fullName: Yup.string()
    .strict()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long")
    .required("Name is required"),

  email: Yup.string().email().required("Invalid email format"),

  phoneNo: Yup.string().matches(
    /^[0-9]{10}$/,
    "Mobile number must be exactly 10 digits"
  ),
  graduationYear: Yup.number(),
  // degree: Yup.string().oneOf(courses, 'Invalid Course selected'),
  currentProfession: Yup.string().max(50, "Must be in 50 characters"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[\W_]/,
      "Password must contain at least one special character (e.g., !@#$%^&*)"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm your Password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  // profilePicture: Yup.mixed()
  //   .nullable()
  //   .test("fileSize", "File size is too large", (value) => {
  //     return value && value.size <= 5000000; // 5MB limit
  //   })
  //   .test("fileType", "Unsupported File Format", (value) => {
  //     return (
  //       value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
  //     );
  //   }),
  terms: Yup.boolean(true),
});

// using formik for handle form data
const initialValues = {
  userType: "",
  fullName: "",
  email: "",
  phoneNo: "",
  graduationYear: "",
  degree: "",
  currentProfession: "",
  location: "",
  password: "",
  confirmPassword: "",
  profilePicture: null,
  terms: false,
};

// create for file upload Button
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function SignUp() {
  const { users, newUser } = useUser();
  // const [submmitStatus, setSubmitStatus] = useState("");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values, action) => {
        try {
          newUser({
            userType: values.userType,
            fullName: values.fullName,
            email: values.email,
            phoneNo: values.phoneNo,
            graduationYear: values.graduationYear,
            degree: values.degree,
            currentProfession: values.currentProfession,
            location: values.location,
            password: values.password,
            profilePicture: "",
            // terms: values.terms,
          });
          console.log(users);
          // setSubmitStatus = "Success";
          action.resetForm();
        } catch (error) {
          // setSubmitStatus = ()=>{"Error"};
        }
      },
    });

  // Year declare for Graduation Year Field
  const startYear = 2015; // Starting year
  const endYear = 2025; // Ending year

  // States declare for Location Dropdown menu
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi", // National Capital Territory
    "Jammu and Kashmir", // Union Territory
    "Ladakh", // Union Territory
    "Chandigarh", // Union Territory
  ];

  //Courses declare for Degree Dropdown menu
  const courses = [
    "Aeronautical Engineering",
    "Aerospace Engineering",
    "Biomedical Engineering",
    "Biotechnology",
    "Computer Science and Engineering",
    "Electrical Engineering",
    "Electronics Engineering",
    "Information Technology",
    "Mechanical Engineering",
  ];

  return (
    <div className="bg-greenlightColor flex justify-center items-center py-10 ">
      <div className="w-11/12 flex p-3  justify-between ">
        {/* Image Part */}
        <div className="w-2/5 p-10  hidden md:flex items-center">
          <img src={signup} alt="Image" className="w-full h-fit " />
        </div>

        {/* Form */}
        <div className="md:w-1/2 p-5 text-center shadow-2xl flex flex-col gap-2 items-center bg-white rounded-2xl">
          <h1 className="text-4xl text-greenColor font-sans cursor-default">
            Join the Alumni Door
          </h1>
          <p className="text-greenColor font-sans pt-2 cursor-default">
            Stay connected, give back, and thrive in a community of lifelong
            learners.
          </p>

          <form onSubmit={handleSubmit} className="px-6">
            <Divider className="mt-3 w-3/4 justify-self-center bg-greenColor"></Divider>
            <div // Join As
              className=" p-2 flex justify-center mt-4"
            >
              <FormControl
                error={touched.userType && errors.userType}
                className={
                  errors.userType
                    ? "flex flex-row gap-2 items-center font-sans text-red-600"
                    : "flex flex-row gap-2 items-center font-sans"
                }
                // className="flex flex-row gap-2 items-center font-sans"
              >
                <label htmlFor="userType"> Join as : </label>
                <Select
                  className="text-left w-28 h-10"
                  // labelId=""
                  id="userType"
                  name="userType"
                  // label="Degree"

                  color="success"
                  onChange={handleChange}
                  value={values.userType}

                  // helperText={touched.userType && errors.userType}
                >
                  <MenuItem value="Alumni">Alumni</MenuItem>
                  <MenuItem value="Student">Student</MenuItem>
                </Select>
                <FormHelperText>
                  {touched.userType && errors.userType}
                </FormHelperText>
                {/* {touched.userType && errors.userType ? (
                  <span className="text-red-600 text-xs">{errors.userType}</span>
                ) : null} */}
              </FormControl>
            </div>

            <h4 className="justify-self-start text-gray-600 font-sans mt-4 cursor-default">
              Personal Information:
            </h4>
            <div className="flex gap-6 flex-wrap justify-around md:justify-between p-3">
              <TextField //Full Name
                id=""
                name="fullName"
                variant="standard"
                type="text"
                label="Full Name"
                color="success"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fullName && Boolean(errors.fullName)}
                helperText={touched.fullName && errors.fullName}
              />

              <TextField //Email
                id=""
                name="email"
                variant="standard"
                type="email"
                label="Email"
                color="success"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
              />
              <TextField //Mobile No.
                className=" w-48"
                id=""
                name="phoneNo"
                variant="standard"
                type="text"
                label="Phone No."
                color="success"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment className="px-1" position="start">
                        +91
                      </InputAdornment>
                    ),
                  },
                }}
                value={values.phoneNo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phoneNo && errors.phoneNo}
                helperText={touched.phoneNo && errors.phoneNo}
              />
              <FormControl className="flex gap-2 font-sans items-start p-2 md:right-9">
                <label htmlFor="profilePicture" className="text-sm">
                  {" "}
                  Profile Photo :
                </label>
                <Button
                  className=" text-greenColor border-greenColor hover:bg-greenlightColor h-fit self-center text-xs"
                  // size="small"
                  variant="outlined"
                  tabIndex={-1}
                  component="label"
                  name="profilePicture"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload files
                  <VisuallyHiddenInput
                    type="file"
                    // onChange={(event) => console.log(event.target.files)}
                  />
                </Button>
                {touched.profilePicture && errors.profilePicture && (
                  <div style={{ color: "red" }}>{errors.profilePicture}</div>
                )}
                {values.profilePicture && (
                  <div style={{ marginTop: "10px" }}>
                    Selected File: {values.profilePicture.name}
                  </div>
                )}
              </FormControl>
            </div>
            <h4 className="justify-self-start text-gray-600 font-sans mt-4 cursor-default">
              Alumni Details:
            </h4>
            <div className="flex gap-6 flex-wrap justify-around md:justify-between p-3">
              <FormControl // Graduation Year
                variant="standard"
                color="success"
                sx={{ minWidth: 200, maxWidth: 200 }}
              >
                <InputLabel id="graduation-id">Graduation Year</InputLabel>
                <Select
                  className="text-left"
                  labelId="graduation-id"
                  id="gradYear-id"
                  name="graduationYear"
                  label="graduationYear"
                  value={values.graduationYear}
                  onChange={handleChange}
                >
                  {/* Dynamically Year update */}
                  {Array.from(
                    { length: endYear - startYear + 1 },
                    (_, index) => (
                      <MenuItem key={endYear - index} value={endYear - index}>
                        {endYear - index}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>

              <FormControl //Degree
                variant="standard"
                color="success"
                sx={{ minWidth: 200, maxWidth: 200 }}
              >
                <InputLabel id="degre-id">Degree</InputLabel>
                <Select
                  className="text-left"
                  labelId="degree-id"
                  id="demo-simple-select-standard"
                  name="degree"
                  label="Degree"
                  value={values.degree}
                  onChange={handleChange}
                >
                  {courses.map((course) => (
                    <MenuItem key={course} value={course}>
                      {course}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField // Current Profession
                id="currentProfession"
                name="currentProfession"
                variant="standard"
                type="text"
                label="Current Profession "
                color="success"
                value={values.currentProfession}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.currentProfession && errors.currentProfession}
                helperText={
                  touched.currentProfession && errors.currentProfession
                }
              />

              <FormControl //Location
                variant="standard"
                color="success"
                sx={{ minWidth: 200, maxWidth: 200 }}
              >
                <InputLabel id="location-label-id">Location</InputLabel>
                <Select
                  className="text-left"
                  labelId="location-label-id"
                  id="location-id"
                  name="location"
                  label="Location"
                  value={values.location}
                  onChange={handleChange}
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <h4 className="justify-self-start text-gray-600 font-sans mt-4 cursor-default">
              Profile Setup:
            </h4>
            <div className="flex gap-6 flex-wrap justify-around md:justify-between p-3">
              <TextField //Password
                variant="standard"
                label="Password"
                color="success"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
              />
              <TextField //Confirm Password
                id="confirmPassword"
                variant="standard"
                label="Confirm Password"
                color="success"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.confirmPassword && errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
              />
            </div>

            {/* CheckBox Div */}
            <div className=" text-left justify-center mt-4 px-4 ">
              <input
                id="loggedin"
                type="checkbox"
                className="cursor-pointer"
                name="terms"
                checked={values.terms}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label
                htmlFor="loggedin"
                className="font-sans text-sm px-2 cursor-pointer"
              >
                I Agree with the <Link> Terms & Conditions</Link> of clarity
              </label>
              {touched.terms && !values.terms && (
                <div className="text-red-600 font-sans text-xs pt-1">
                  You must agree to the terms and conditions
                </div>
              )}
            </div>
            <Button //Submit Button
              className=" w-full my-4 bg-greenColor capitalize font-semibold text-base p-3"
              variant="contained"
              type="submit"
            >
              Create Account
            </Button>
          </form>
          <p className="font-sans text-sm px-2">
            Already have an account?
            <Link to="/login" className="no-underline px-1">
              Login
            </Link>
          </p>
        </div>
        {/* {submmitStatus === "Success" && (
          <Backdrop open={true}>
            <Paper className="w-fit h-fit flex bg-greenlightColor  justify-center items-center p-10">
              <h3>Register Successfull !!</h3>
            </Paper>
          </Backdrop>
        )} */}
      </div>
      {/* {submmitStatus === "Error" && (
        <Backdrop open={true}>
          <Paper className="w-fit h-fit flex bg-greenlightColor flex-col  items-center p-8 pt-3 gap-8">
            <h1>Not Register,....Try again</h1>
          </Paper>
        </Backdrop>
      )} */}
    </div>
  );
}

export default SignUp;
