import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";
import * as Yup from "yup";

import {
  Avatar,
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";

import {
  ALUMNIDOOR14,
  ALUMNIDOOR44,
  ALUMNIDOOR59,
  ALUMNIDOOR8,
  avatarimg,
} from "../assets";

import {
  BadgeIcon,
  CloseIcon,
  Diversity2Icon,
  FaDonate,
  LogoutIcon,
  KeyboardArrowRightIcon,
  ModeEditOutlineRoundedIcon,
  RiRobot2Fill,
  SiCodementor,
  WorkspacePremiumIcon,
  SchoolIcon,
  // CardMembershipIcon,
  StarsIcon,
} from "../assets/iconIndex";

import { useFormik } from "formik";
import { courses, states, profession } from "./SignUp";

const skills = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "Data Engineer",
  "Machine Learning Engineer",
  "Software Developer",
  "Software Engineer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Cyber Security Analyst",
  "Network Engineer",
  "UI/UX Designer",
  "Product Manager",
  "Project Manager",
  "Business Analyst",
  "Digital Marketing Specialist",
  "Content Writer",
];

function Door() {
  const navigate = useNavigate();
  const { users, updateUser } = useUser();
  const { userid } = useParams();
  const [openEdit, setOpenEdit] = useState(false);
  const [profileEdit, setProfileEdit] = useState(false);
  const [personalEdit, setPersonalEdit] = useState(false);

  const startYear = 2015;
  const endYear = 2028;

  let user = users.find((user) => user.id === parseInt(userid, 10));

  useEffect(() => {
    user = users.find((user) => user.id === parseInt(userid, 10));
    console.log(user);
  }, [updateUser]);

  // Handle case where user is not found
  if (!user) {
    return (
      <div className="flex flex-col h-52 bg-neutral-100 gap-6 p-5 justify-center items-center">
        <h3 className="text-3xl">
          <span className="text-red-600">Error 404: </span>User not found
        </h3>
        <Link to="/signup" className=" text-blue-600">
          Click here to Login again
        </Link>
      </div>
    );
  }

  const userSchema = Yup.object({
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

    mentor: Yup.string(),

    company: Yup.string(),

    availability: Yup.string().matches(/[Not Available,Message]/),

    skill: Yup.array()
      .min(1, "At least one skill must be selected")
      .max(3, "You can select up to 3 skills"),
  });

  const initialValues = {
    userType: user.userType,
    fullName: user.fullName,
    email: user.email,
    phoneNo: user.phoneNo,
    graduationYear: user.graduationYear,
    degree: user.degree,
    currentProfession: user.currentProfession,
    location: user.location,
    mentor: user.mentor,
    company: user.company,
    availability: user.availability,
    skill: user.skill || [],

    profilePicture: null,
    // terms: false,
  };

  const { values, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values) => {
        try {
          updateUser(user.id, values);
          setOpenEdit(false);
          action.resetForm();
        } catch (error) {
          console.error(error);
        }
        // console.log("values are:", values);
      },
    });

  return (
    <>
      <Divider className="md:top-24 sticky z-40" />
      <div className=" md:max-w-screen-xl bg-neutral-100 flex px-4 gap-8 ">
        <div //Left Side Bar
          className="h-dvh w-1/5 hidden md:flex py-6 px-6 gap-5 "
        >
          <div //Profile Card
            className="flex flex-col justify-center bg-white p-4 rounded-lg shadow-lg"
          >
            <Tooltip title="Edit Profile">
              <IconButton
                className="self-end relative -mt-2 -right-2 hover:bg-neutral-200"
                onClick={() => setOpenEdit(true)}
              >
                <ModeEditOutlineRoundedIcon className="text-sm text-greenColor  " />
              </IconButton>
            </Tooltip>
            <Backdrop open={openEdit} className="z-50">
              <div className="bg-white flex flex-col h-4/5 w-4/5 px-4 rounded-lg shadow-lg overflow-scroll">
                <div className="flex px-1 justify-between sticky top-0 pt-4 bg-white z-20 ">
                  <h3 className=" font-semibold font-sans text-lg">
                    Edit Profile
                  </h3>
                  <IconButton
                    className="self-end relative  hover:bg-neutral-200"
                    onClick={() => setOpenEdit(false)}
                  >
                    <CloseIcon className="text-base text-greenColor  " />
                  </IconButton>
                </div>
                <Divider className="h-1 sticky top-12 z-20 mb-2 bg-neutral-400" />
                {/* <Divider className="" /> */}
                <form onSubmit={handleSubmit}>
                  <div className="px-1 py-2">
                    {/* User Type */}
                    <FormControl
                      // className="flex flex-row gap-2 items-center font-sans"
                      error={touched.userType && errors.userType}
                      className={
                        errors.userType
                          ? "flex flex-row gap-2 items-center mb-4 justify-self-center font-sans text-red-600"
                          : "flex flex-row gap-2 items-center mb-4 justify-self-center font-sans"
                      }
                    >
                      <label htmlFor="userType-id"> You Are : </label>
                      <Select
                        className="text-left w-28 h-10"
                        // labelId=""
                        id="userType-id"
                        name="userType"
                        disabled={values.userType === "Alumni"}
                        color="success"
                        onChange={handleChange}
                        value={values.userType}
                        helperText={touched.userType && errors.userType}
                      >
                        <MenuItem value="Alumni">Alumni</MenuItem>
                        <MenuItem value="Student">Student</MenuItem>
                      </Select>
                    </FormControl>
                    <Divider className="my-2 " variant="middle" flexItem />

                    {/* Profile Edit */}

                    <div className="flex mt-4 justify-between items-baseline">
                      <h4 className="justify-self-start text-gray-600 font-sans cursor-default">
                        Profile Section:
                      </h4>
                      <Button
                        className="justify-self-end"
                        onClick={() => {
                          setProfileEdit(true);
                        }}
                      >
                        Edit
                      </Button>
                    </div>

                    <div className="flex gap-6 flex-wrap items-center justify-around md:justify-between p-3">
                      <IconButton>
                        <Avatar className="w-20 h-auto" src={avatarimg} />
                      </IconButton>
                      <TextField //Full Name
                        id="name"
                        name="fullName"
                        variant="standard"
                        type="text"
                        label="Full Name"
                        color="success"
                        disabled={profileEdit === false}
                        value={values.fullName}
                        onChange={handleChange}

                        // onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                        // onBlur={handleBlur}
                        // error={touched.fullName && Boolean(errors.fullName)}
                        // helperText={touched.fullName && errors.fullName}
                      />

                      <TextField //Email
                        id="mail"
                        name="email"
                        variant="standard"
                        type="email"
                        label="Email"
                        color="success"
                        disabled
                        placeholder="johndoe@gmail.com"
                        value={values.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                      <TextField //Mobile No.
                        className=" w-48"
                        disabled
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
                      />
                      {/* <FormControl className="flex gap-2 font-sans items-start p-2 md:right-9">
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
                {user.profilePicture && (
                  <div style={{ marginTop: "10px" }}>
                    Selected File: {user.profilePicture.name}
                  </div>
                )}
              </FormControl> */}
                    </div>

                    <Divider className="my-2 " variant="middle" flexItem />

                    {/* Personal Information */}

                    <div className="flex mt-4 justify-between items-baseline">
                      <h4 className="justify-self-start text-gray-600 font-sans  cursor-default">
                        Personal Section:
                      </h4>
                      <Button
                        className="justify-self-end"
                        onClick={() => {
                          setPersonalEdit(true);
                        }}
                      >
                        Edit
                      </Button>
                    </div>
                    <div
                      // disabled={personalEdit === false}
                      className="flex flex-row gap-6 mt-2 flex-wrap justify-around md:justify-between p-3"
                    >
                      <FormControl // Graduation Year
                        variant="standard"
                        color="success"
                        sx={{ minWidth: 200, maxWidth: 200 }}
                        disabled={personalEdit === false}
                      >
                        <InputLabel id="graduation-id">
                          Graduation Year
                        </InputLabel>
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
                              <MenuItem
                                key={endYear - index}
                                value={endYear - index}
                              >
                                {endYear - index}
                              </MenuItem>
                            )
                          )}
                        </Select>
                      </FormControl>

                      <FormControl //Degree
                        variant="standard"
                        color="success"
                        disabled={personalEdit === false}
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
                        disabled={
                          values.userType === "Student" ||
                          personalEdit === false
                        }
                        sx={{ minWidth: 200, maxWidth: 200 }}
                      >
                        <InputLabel id="profession-id">
                          Current Profession
                        </InputLabel>
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
                        disabled={
                          values.userType === "Student" ||
                          personalEdit === false
                        }
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

                    <Divider className="my-2" variant="middle" flexItem />

                    {/* Mentor Section */}
                    <div className="p-1 pt-3">
                      {/* <p className="font-sans">Do You want to be a Mentor ?</p> */}

                      <FormControl
                        disabled={values.userType === "Student"}
                        className="flex flex-row gap-2  items-center font-sans"
                      >
                        <label htmlFor="mentor-id">
                          Do You want to be a Mentor ? :{" "}
                        </label>
                        <Select
                          className="text-left w-28 h-10"
                          id="mentor-id"
                          name="mentor"
                          color="success"
                          onChange={handleChange}
                          value={values.mentor}

                          // helperText={touched.userType && errors.userType}
                        >
                          <MenuItem value="No">No</MenuItem>
                          <MenuItem value="Yes">Yes</MenuItem>
                        </Select>
                        {/* <FormHelperText>
                        {touched.userType && errors.userType}
                      </FormHelperText> */}
                      </FormControl>
                      <div className={values.mentor === "No" ? "hidden" : " "}>
                        <div className="flex mt-3 justify-between items-baseline">
                          <h4 className="justify-self-start text-gray-600 font-sans  cursor-default">
                            Mentor Section:
                          </h4>
                          <Button
                            className="justify-self-end"
                            onClick={() => {
                              // setPersonalEdit(true);
                            }}
                          >
                            Edit
                          </Button>
                        </div>
                        <div className="flex flex-row gap-6 flex-wrap justify-around md:justify-between p-3">
                          <TextField // Company
                            id="company-id"
                            // disabled={values.userType === "Student"}
                            name="company"
                            variant="standard"
                            type="text"
                            label="Current Company "
                            color="success"
                            value={values.company}
                            onChange={handleChange}
                          />

                          <FormControl //Skill
                            variant="standard"
                            color="success"
                            sx={{ minWidth: 200, maxWidth: 300 }}
                          >
                            <InputLabel id="skill-label-id">Skills</InputLabel>
                            <Select
                              className="text-left flex"
                              id="skill-id"
                              name="skill"
                              color="success"
                              multiple
                              onChange={handleChange}
                              value={values.skill}
                              renderValue={() => (
                                <div className="flex flex-row overflow-visible relative gap-0.5">
                                  {""}
                                </div>
                              )}
                              error={touched.skill && errors.skill}
                              // helperText={touched.skill && errors.skill}
                              // MenuProps={MenuProps}
                            >
                              {skills.map((skill) => (
                                <MenuItem key={skill} value={skill}>
                                  <Checkbox
                                    checked={values.skill.includes(skill)}
                                  />
                                  {skill}
                                </MenuItem>
                              ))}
                            </Select>
                            <FormHelperText
                              error={touched.skill && errors.skill}
                            >
                              {touched.skill && errors.skill}
                            </FormHelperText>
                            {
                              <div className="flex flex-row flex-wrap w-full overflow-visible relative pt-1 gap-1">
                                {values.skill.map((val) => (
                                  <Chip key={val} label={val} />
                                ))}
                              </div>
                            }
                          </FormControl>

                          <FormControl //Availability
                            // className="flex flex-row gap-2 items-center font-sans"
                            // error={touched.userType && errors.userType}
                            className={
                              errors.availability
                                ? "flex flex-row gap-2 items-center mb-4 justify-self-center font-sans text-red-600"
                                : "flex flex-row gap-2 items-center mb-4 justify-self-center font-sans"
                            }
                          >
                            <label htmlFor="availability-id">
                              {" "}
                              Availability :{" "}
                            </label>
                            <Select
                              className="text-left w-28 h-10"
                              labelId="availability-id"
                              id="availability-id"
                              name="availability"
                              // disabled={values.availability === "Alumni"}
                              color="success"
                              onChange={handleChange}
                              value={values.availability}
                              helperText={
                                touched.availability && errors.availability
                              }
                            >
                              <MenuItem value="Not Available">
                                Not Available
                              </MenuItem>
                              <MenuItem value="Message">Message</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="bg-greenColor text-white flex justify-self-end font-semibold mt-4"
                      type="submit"
                    >
                      Save
                    </Button>
                  </div>
                </form>
              </div>
            </Backdrop>

            <div className="text-center items-center flex flex-col mb-3  ">
              <Avatar className="w-20 h-auto mb-2" src={avatarimg} />
              <span className="font-semibold font-sans text-xl ">
                {/* Anant Yash */}
                {user.fullName}
              </span>

              <span className="  font-sans flex items-center text-sm ">
                {/* Computer Science Engineering */}
                {user.degree}
              </span>

              <p className=" font-sans flex items-center ">
                {" "}
                <span className="text-blue-700 px-1">
                  <BadgeIcon className="text-lg pt-1" />
                </span>
                {/* Frontend Developer */}
                {user.userType === "Alumni"
                  ? user.currentProfession
                  : user.userType}
              </p>
            </div>
            {user.mentor === "Yes" && (
              <Chip
                className="bg-orange-100 cursor-default w-fit self-center font-sans font-semibold"
                label="Mentor"
                icon={<WorkspacePremiumIcon className="text-orange-500" />}
              />
            )}
            {user.mentor === "No" && user.userType === "Alumni" && (
              <Chip
                className="bg-slate-200 cursor-default w-fit self-center font-sans font-semibold"
                label="Alumni"
                icon={<StarsIcon className="text-slate-500" />}
              />
            )}
            {user.userType === "Student" && (
              <Chip
                className="bg-yellow-100 cursor-default w-fit self-center font-sans font-semibold"
                label="Student"
                icon={<SchoolIcon className="text-yellow-900" />}
              />
            )}
            <Divider className="mt-10 mb-7 font-sans cursor-default" flexItem>
              Quick Links
            </Divider>
            <div //Quick Links
              className="flex flex-col gap-5 
            [&>*]:no-underline   [&>*]:rounded-lg   [&>*]:text-black    [&>*]:flex       
            [&>*]:font-sans    [&>*]:font-semibold     [&>*]:gap-3        [&>*]:px-3
            hover:[&>*]:transition-all hover:[&>*]:duration-300 hover:[&>*]:ease-in-out 
            hover:[&>*]:text-greenTextColor 
            "
            >
              <Link to={"/network/home/"}>
                <Diversity2Icon className="text-greenColor" /> Networking Hub
              </Link>
              <Link to={"/mentorship-program"}>
                <SiCodementor className="text-greenColor text-2xl self-center " />{" "}
                Mentorship Program
              </Link>
              <Link to={"/donation-page"}>
                <FaDonate className="text-greenColor text-xl self-center ml-1  " />{" "}
                Donation Portal
              </Link>
              <Link to={"/support"}>
                {/* <SupportAgentIcon className="text-greenColor" />  */}
                <RiRobot2Fill className="text-greenColor text-xl self-center ml-1  " />
                Support & Feedback
              </Link>
            </div>
            <Divider className="mt-10 mb-5" flexItem variant="middle" />
            <Link
              to={"/"}
              className=" no-underline justify-self-center px-4 mb-2 text-black hover:text-greenTextColor font-semibold font-sans flex items-center gap-2 "
            >
              <LogoutIcon className="text-greenColor" /> Log Out
            </Link>
          </div>
        </div>

        <div //main content
          className=" w-full md:w-3/5 px-5 md:px-16 py-4 drop-shadow-2xl rounded-lg my-6 flex flex-col gap-4 bg-white"
        >
          <div //Header Section
            className=" w-full md:ml-5 font-sans text-left relative top-4 p-6 rounded-xl "
          >
            <h3 className="  font-semibold text-xl">
              {" "}
              <span className="text-3xl flex flex-col font-extrabold font-serif pr-2 text-greenColor mb-1 ">
                Welcome to Door:
              </span>
              Your Gateway to Connection and Growth.
            </h3>
          </div>
          <Divider className="my-1 mx-10" variant="middle" flexItem />
          {/* <p className=" text-center text-lg ">
              Empowering you to engage, support, and thrive with the Alumni
              Network
            </p> */}

          <div //Cards Section
            className="w-fit md:w-fit h-fit mt-4 p-8 pt-0 flex flex-wrap rounded-xl gap-16 justify-around  hover:[&>*]:drop-shadow-2xl  "
          >
            <Card //Networking Hub
              className="md:w-5/12 bg-greenColor text-white font-sans"
            >
              <CardMedia component="img" image={ALUMNIDOOR59} />
              <CardContent className=" cursor-default ">
                <h3>Networking Hub</h3>
                <p>Expand Your Professional Network</p>
              </CardContent>
              <CardActions>
                <Button
                  className="text-greenlightColor drop-shadow-2xl font-semibold hover:text-yellow-300"
                  endIcon={<KeyboardArrowRightIcon />}
                  onClick={() => {
                    navigate("/network");
                  }}
                >
                  Connect
                </Button>
              </CardActions>
            </Card>
            <Card //Mentorship Program
              className="md:w-5/12 bg-greenColor text-white font-sans"
            >
              <CardMedia component="img" image={ALUMNIDOOR8} />
              <CardContent className="cursor-default">
                <h3>Mentorship Program</h3>
                <p>Find a Mentor or Become One</p>
              </CardContent>
              <CardActions>
                <Button
                  className="text-greenlightColor drop-shadow-2xl font-semibold hover:text-yellow-300"
                  endIcon={<KeyboardArrowRightIcon className="font-semibold" />}
                  onClick={() => {
                    navigate("/mentorship-program");
                  }}
                >
                  Join Now
                </Button>
              </CardActions>
            </Card>
            <Card //Donation Portal
              className="md:w-5/12 bg-greenColor text-white font-sans"
            >
              <CardMedia component="img" image={ALUMNIDOOR14} />
              <CardContent className="   ">
                <h3>Donation Portal</h3>
                <p>Giving Back, Shaping Futures.</p>
              </CardContent>
              <CardActions>
                <Button
                  className="text-greenlightColor drop-shadow-2xl font-semibold hover:text-yellow-300"
                  endIcon={<KeyboardArrowRightIcon />}
                  onClick={() => {
                    navigate("/donation-page");
                  }}
                >
                  Donate Now
                </Button>
              </CardActions>
            </Card>
            <Card //Support & Feedback
              className="md:w-5/12 bg-greenColor text-white font-sans"
            >
              <CardMedia component="img" image={ALUMNIDOOR44} />
              <CardContent className="   ">
                <h3>Support & Feedback</h3>
                <p>Need Help? We're Here for You</p>
              </CardContent>
              <CardActions>
                <Button
                  className="text-greenlightColor drop-shadow-2xl font-semibold hover:text-yellow-300"
                  endIcon={<KeyboardArrowRightIcon />}
                  onClick={() => {
                    navigate("/support");
                  }}
                >
                  Get Help
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Door;
