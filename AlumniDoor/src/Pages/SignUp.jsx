import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import signup from "../assets/AlumniPics/ALUMNIDOOR (2).png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Alert,
  Backdrop,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
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
  terms: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
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
  mentor: "No",
  company: "",
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

// States declare for Location Dropdown menu
export const states = [
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
export const courses = [
  "Aeronautical Engineering",
  "Aerospace Engineering",
  "Biomedical Engineering",
  "Biotechnology",
  "Computer Science Engineering",
  "Electrical Engineering",
  "Electronics Engineering",
  "Information Technology",
  "Mechanical Engineering",
];

export const profession = [
  "Aeronautical Engineer",
  "Aerospace Engineer",
  "Aircraft Design Engineer",
  "Artificial Intelligence Engineer",
  "Automotive Engineer",
  "Avionics Engineer",
  "Backend Developer",
  "Biomedical Engineer",
  "Biomaterials Engineer",
  "Biotechnologist",
  "Bioinstrumentation Engineer",
  "Clinical Engineer",
  "Control Systems Engineer",
  "Cybersecurity Analyst",
  "Data Scientist",
  "Electrical Engineer",
  "Electronics Engineer",
  "Environmental Scientist",
  "Flight Test Engineer",
  "Frontend Developer",
  "Genetic Engineer",
  "Healthcare IT Specialist",
  "IT Manager",
  "Machine Learning Engineer",
  "Manufacturing Engineer",
  "Mechanical Engineer",
  "Medical Device Engineer",
  "Pharmaceutical Engineer",
  "Power Systems Engineer",
  "Project Manager",
  "Propulsion Engineer",
  "Rehabilitation Engineer",
  "Robotics Engineer",
  "Software Engineer",
  "Spacecraft Engineer",
  "Systems Administrator",
  "Systems Engineer",
  "Tissue Engineer",
  "Web Developer",
];

function SignUp() {
  const [submmitStatus, setSubmitStatus] = useState("");
  const { users, newUser } = useUser();
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values, action) => {
        const userId = Date.now();
        try {
          newUser({
            id: userId,
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
            mentor: values.mentor,
            // company: values.company,
          });

          setSubmitStatus("Success"); // for successful message
          // console.log("Navigating to Door with userId:", userId);
          setTimeout(() => {
            navigate(`/door/${userId}`); // for navigate to door page
          }, 1000);
          action.resetForm();
        } catch (error) {
          // catch error algo
          console.error("Error creating user:", error);
          setSubmitStatus("Error");
        }
        const timer = setTimeout(() => {
          setSubmitStatus("");
        }, 4000);

        return () => clearTimeout(timer); // for free the timer memory
      },
    });

  // Year declare for Graduation Year Field
  const startYear = 2015; // Starting year
  const endYear = 2028; // Ending year

  return (
    <div className="bg-greenlightColor  flex flex-col justify-center items-center py-10 ">
      {submmitStatus === "Success" && (
        <Backdrop open={true} className="z-20">
          <Alert
            className="w-fit inline-flex absolute top-4 ease-in-out transition-transform translate-y-6 delay-150 text-center "
            severity="success"
          >
            {" "}
            Register successfully
          </Alert>
        </Backdrop>
      )}
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
              Profile Setup:
            </h4>
            <div className="flex gap-6 flex-wrap justify-around md:justify-between p-3">
              <TextField //Full Name
                id="name"
                name="fullName"
                variant="standard"
                type="text"
                label="Full Name"
                color="success"
                // autoComplete="name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fullName && Boolean(errors.fullName)}
                helperText={touched.fullName && errors.fullName}
              />

              <TextField //Email
                id="mail"
                name="email"
                variant="standard"
                type="email"
                label="Email"
                color="success"
                placeholder="johndoe@gmail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
                autoComplete="email"
              />
              <TextField //Mobile No.
                className=" w-48"
                id="phoneNo"
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
              Personal Information:
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
                  placeholder="Graduation Year"
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

              <FormControl // Current Profession
                variant="standard"
                color="success"
                disabled={values.userType === "Student"}
                sx={{ minWidth: 200, maxWidth: 200 }}
              >
                <InputLabel id="profession-id">Current Profession</InputLabel>
                <Select
                  className="text-left"
                  labelId="profession-id"
                  id="currentProfession"
                  name="currentProfession"
                  label="Current Profession "
                  value={values.currentProfession}
                  onChange={handleChange}
                >
                  {profession.map((profession) => (
                    <MenuItem key={profession} value={profession}>
                      {profession}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl //Location
                variant="standard"
                color="success"
                sx={{ minWidth: 200, maxWidth: 200 }}
                disabled={values.userType === "Student"}
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
              Password Setup:
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
      </div>
    </div>
  );
}

export default SignUp;
