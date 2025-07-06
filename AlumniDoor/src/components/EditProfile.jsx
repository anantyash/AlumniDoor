import {
  Backdrop,
  Divider,
  Checkbox,
  InputAdornment,
  InputLabel,
  MenuItem,
  Button,
  Select,
  TextField,
  FormControl,
  FormHelperText,
  IconButton,
  Avatar,
  Chip,
  Snackbar,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import { editUserSchema } from "../components/Validating";
import { useFormik } from "formik";
import {
  endYear,
  skills,
  startYear,
  courses,
  profession,
} from "../components/Data";
import { CloseIcon } from "../assets/iconIndex";
import { ALUMNIDOOR39, ALUMNIDOOR49, avatarimg } from "../assets/Images";
import dbService from "../services/AD_DB/userDB";

function EditProfile({ user = {}, open, close }, ref) {
  const [profileEdit, setProfileEdit] = useState(false);
  const [personalEdit, setPersonalEdit] = useState(false);
  const [professionalEdit, setProfessionalEdit] = useState(false);
  const pfp = { ALUMNIDOOR39, ALUMNIDOOR49 };

  const initialValues = {
    userType: user.userType,
    fullName: user.fullName,
    email: user.email,
    phoneNo: user.phoneNo,
    graduationYear: user.graduationYear,
    degree: user.degree,
    currentProfession: user.currentProfession,
    linkdnUrl: user.linkdnUrl,
    mentor: user.mentor,
    company: user.company,
    availability: user.availability,
    skill: user.skill || [],

    profilePicture: null,
    // terms: false,
  };

  const handleCloseBtn = () => {
    close(() => {
      return !open;
    });
  };

  const { values, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: editUserSchema,
      onSubmit: () => {
        try {
          // updateUser(user.id, values);
          // console.log(values);
          dbService
            .createMentor(
              user.id,
              values.availability === "Not Available" ? false : true,
              values.skill
            )
            .then((data) => {
              if (data) {
                // console.log("Success");
                return (
                  <Snackbar
                    open={true}
                    message={"Save Successfully"}
                    autoHideDuration={3000}
                  />
                );
              }
            });

          close(() => {
            return !open;
          });

          action.resetForm();
        } catch (error) {
          // console.error("Submission Error ", error);
          throw new Error("Error:", error);
        }
      },
    });
  return (
    <>
      <Backdrop aria-hidden={false} open={open} className="z-50">
        <div
          ref={ref}
          className="bg-white flex flex-col h-4/5 w-4/5 px-4 rounded-lg shadow-lg overflow-y-scroll scrollbar-custom"
        >
          <div className="flex px-1 justify-between sticky top-0 pt-4 bg-white z-20 ">
            <h3 className=" font-semibold font-sans text-lg">Edit Profile</h3>
            <IconButton
              className="self-end relative  hover:bg-neutral-200"
              onClick={handleCloseBtn}
            >
              <CloseIcon className="text-base text-greenColor  " />
            </IconButton>
          </div>
          <Divider className="h-1 sticky top-12 z-20 mb-2 bg-neutral-400" />

          <form onSubmit={handleSubmit}>
            <div className="px-1 py-2">
              {/* User Type */}
              <FormControl
                error={touched.userType && Boolean(errors.userType)}
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
                  // disabled={values.userType === "Alumni"}
                  color="success"
                  onChange={handleChange}
                  value={values.userType}
                  helperText={touched.userType && errors.userType}
                >
                  {values.userType !== "Student" && (
                    <MenuItem value="Mentor">Mentor</MenuItem>
                  )}
                  <MenuItem value="Alumni">Alumni</MenuItem>
                  {values.userType === "Student" && (
                    <MenuItem value="Student">Student</MenuItem>
                  )}
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
                  <Avatar
                    className="w-20 h-auto"
                    src={pfp[user.profilePictureUrl]}
                  />
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
                  error={touched.fullName && Boolean(errors.fullName)}
                  helperText={touched.fullName && errors.fullName}

                  // onBlur={handleBlur}
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
              <div className="flex flex-row gap-6 mt-2 flex-wrap justify-around md:justify-evenly p-3">
                <FormControl // Graduation Year
                  variant="standard"
                  color="success"
                  sx={{ minWidth: 200, maxWidth: 200 }}
                  disabled={personalEdit === false}
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

                {/* <FormControl //Location
                  variant="standard"
                  disabled={
                    values.userType === "Student" || personalEdit === false
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
                </FormControl> */}
              </div>

              <Divider className="my-2" variant="middle" flexItem />

              {/* Mentor Section */}
              <div className="p-1 pt-3">
                {/* <FormControl
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
                  >
                    <MenuItem value={false}>No</MenuItem>
                    <MenuItem value={true}>Yes</MenuItem>
                  </Select>
                </FormControl> */}
                <div className={values.userType === "Student" ? "hidden" : " "}>
                  <div className="flex mt-3 justify-between items-baseline">
                    <h4 className="justify-self-start text-gray-600 font-sans  cursor-default">
                      Professional Section:
                    </h4>
                    <Button
                      className="justify-self-end"
                      onClick={() => {
                        setProfessionalEdit(true);
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                  <div className="flex flex-row gap-6 flex-wrap justify-evenly p-3">
                    <FormControl // Current Profession
                      variant="standard"
                      color="success"
                      disabled={
                        values.userType === "Student" ||
                        professionalEdit === false
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

                    <TextField // Linkedin URL
                      id="linkdnUrl-id"
                      name="linkdnUrl"
                      variant="standard"
                      type="text"
                      label="LinkedIn URL"
                      color="success"
                      disabled={profileEdit === false}
                      value={values.linkdnUrl}
                      onChange={handleChange}
                      error={touched.linkdnUrl && Boolean(errors.linkdnUrl)}
                      helperText={touched.linkdnUrl && errors.linkdnUrl}

                      // onBlur={handleBlur}
                    />

                    {values.userType === "Mentor" && (
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
                            <div className="flex flex-row overflow-visible relative gap-0.5"></div>
                          )}
                          error={touched.skill && errors.skill}
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
                          error={touched.skill && Boolean(errors.skill)}
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
                    )}

                    {/* <FormControl //Availability
                      className={
                        errors.availability
                          ? "flex flex-row gap-2 items-center mb-4 justify-self-center font-sans text-red-600"
                          : "flex flex-row gap-2 items-center mb-4 justify-self-center font-sans"
                      }
                    >
                      <label htmlFor="availability-id"> Availability : </label>
                      <Select
                        className="text-left w-28 h-10"
                        labelId="availability-id"
                        id="availability-id"
                        name="availability"
                        color="success"
                        onChange={handleChange}
                        value={values.availability}
                        helperText={touched.availability && errors.availability}
                      >
                        <MenuItem value={"Not Available"}>
                          Not Available
                        </MenuItem>
                        <MenuItem value={"Available"}>Available</MenuItem>
                      </Select>
                    </FormControl> */}
                  </div>
                </div>
              </div>

              {/* Save Button */}
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
    </>
  );
}

export default forwardRef(EditProfile);
