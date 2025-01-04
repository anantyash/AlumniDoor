import React, { useState } from "react";
import { logo, avatarimg } from "../assets";

import {
  Button,
  IconButton,
  Avatar,
  Divider,
  Backdrop,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  CloseIcon,
  NotificationsIcon,
  LightModeIcon,
  DarkModeIcon,
  MenuIcon,
  MeetingRoomIcon,
  DoorBackIcon,
  HomeIcon,
  SchoolIcon,
  Diversity1Icon,
} from "../assets/iconIndex";

import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ page }) => {
  const [mode, setMode] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDoor, setOpenDoor] = useState(false);
  const navigate = useNavigate();

  // const handletheme = () => {
  //   setMode(!mode);
  // };

  return (
    <>
      {/* For Landing Page Nav Bar */}
      {page === "LandingPage" && (
        <div // Nav Container
          className=" w-auto h-fit flex md:items-center justify-between px-5 md:gap-0 "
        >
          {" "}
          {/*bg-green-300*/}
          <div //For Contain Logo Image
            className="w-auto h-fit rounded-3xl flex-initial "
          >
            <Link to="/">
              <img src={logo} alt="Logo" className="max-w-56 md:max-w-72" />
            </Link>
          </div>
          <div //For Navlink
            className="w-fit h-fit "
          >
            <div className="md:hidden">
              {openMenu === false && (
                <IconButton
                  className="text-greenColor mt-6 hover:bg-greenlightColor transition-transform ease-in-out delay-300"
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              {openMenu === true && (
                <IconButton
                  className="text-greenColor mt-6 hover:bg-green-50 sticky"
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </div>
            <nav //For Nav Link
              className={!openMenu ? "hidden md:flex" : "flex"}
            >
              <ul
                className="flex flex-col gap-4
                md:flex-row md:static 
                md:pt-11  md:bg-inherit
                md:shadow-none
                px-10 py-5 rounded-md
                right-16 top-16 
                fixed 
                justify-evenly 
                font-bold 
                list-none
                shadow-2xl
                bg-greenColor
                z-10
             "
              >
                <li>
                  <NavLink to="/">
                    <IconButton className="text-white hover:bg-green-600 md:text-greenColor md:hover:bg-greenlightColor rounded-md ">
                      <HomeIcon className="px-1" />{" "}
                      <span className=" text-base font-semibold">Home</span>
                    </IconButton>
                  </NavLink>
                </li>
                {/* Alumni */}
                <li>
                  <IconButton
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="text-white hover:bg-green-600 md:text-greenColor md:hover:bg-greenlightColor rounded-md "
                  >
                    <Diversity1Icon className="px-1" />{" "}
                    <span className=" text-base font-semibold">Alumni</span>
                  </IconButton>
                  {/* <Button
                    variant="text"
                    className="text-white hover:bg-green-600 md:text-green-700 md:hover:bg-green-100 font-semibold"
                  >
                    Alumni
                  </Button> */}
                </li>
                {/* College */}
                <li>
                  <IconButton
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="text-white hover:bg-green-600 md:text-greenColor md:hover:bg-greenlightColor rounded-md "
                  >
                    <SchoolIcon className="px-1" />{" "}
                    <span className=" text-base font-semibold">College</span>
                  </IconButton>
                  {/* <Button
                    variant="text"
                    className="text-white hover:bg-green-600 md:text-green-700 md:hover:bg-green-100 font-semibold"
                  >
                    College
                  </Button> */}
                </li>

                {/* Door */}
                <li>
                  <NavLink>
                    <IconButton
                      className="text-white hover:bg-green-600 md:text-greenColor md:hover:bg-greenlightColor rounded-md "
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      <MeetingRoomIcon className="px-1" />{" "}
                      <span className=" text-base font-semibold">Door</span>
                    </IconButton>
                    {/* <Button
                      variant="text"
                      className="text-white hover:bg-green-600 md:text-green-700 md:hover:bg-green-100 font-semibold"
                    >
                      Door
                    </Button> */}
                  </NavLink>
                  <Backdrop open={openDoor}>
                    <div className="w-full h-full flex justify-center items-center">
                      <Paper className=" w-fit h-fit flex bg-greenlightColor flex-col  items-center p-8 pt-3 gap-8 rounded-tl-full rounded-t-full border-solid border-4 border-greenColor">
                        <IconButton
                          className="text-greenColor bg-white p-8 mt-8 hover:text-greenTextColor w-fit flex-col border-2 border-greenColor border-solid "
                          onClick={() => {
                            setOpenDoor(!openDoor);
                          }}
                        >
                          <DoorBackIcon className="text-3xl" />
                          <span className=" text-xs ">Close</span>
                        </IconButton>
                        <div
                          className="flex flex-col gap-2 p-4 justify-around w-full text-center rounded-lg border-2 border-greenColor border-solid bg-white 
                        [&_.link]:no-underline [&_.link]:text-greenColor [&_.link]:rounded-lg [&_.link]:p-4 "
                        >
                          {/* <Divider className="bg-black"/> */}
                          <Link className=" link hover:bg-greenTextColor">
                            Networking Hub
                          </Link>
                          <Link className="link hover:bg-greenTextColor">
                            Mentorship Program
                          </Link>
                          <Link className="link hover:bg-greenTextColor">
                            Donation Portal
                          </Link>
                          <Link className="link hover:bg-greenTextColor">
                            Support & Feedback
                          </Link>
                        </div>
                      </Paper>
                    </div>
                  </Backdrop>
                </li>
              </ul>
            </nav>
          </div>
          <div // For SignUp/login Button
            className="hidden md:flex flex-row gap-1 p-2 mt-4 rounded-md bg-greenColor drop-shadow-md shadow-lg "
          >
            <Link to="/signup" className="h-full">
              <Button
                className="text-slate-50 bg-greenColor font-semibold w-1/2 h-full hover:bg-green-800 shadow-none hover:drop-shadow-md p-1"
                variant="contained"
              >
                SignUp
              </Button>
            </Link>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="bg-white border-r-2 border-white border-solid"
            />
            <Link to="/login">
              <Button
                className="text-slate-50 bg-greenColor font-semibold hover:bg-green-800 h-full w-1/2 p-1 shadow-none hover:drop-shadow-md "
                variant="contained"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* For Dashboard Nav Bar  */}
      {page === "Dashboard" && (
        <div // Nav Container
          className=" w-auto h-fit top-0 sticky bg-white z-50 flex items-center justify-between px-2 md:px-5 mb-2 md:m-0 "
        >
          {" "}
          <div //For Contain Image
            className="w-fit  flex-initial"
          >
            <Link to="/">
              <img src={logo} alt="Logo" className="max-w-64 md:max-w-72" />
            </Link>
          </div>
          <div // For Icons
            className=" px-2 pt-5"
          >
            <IconButton
              onClick={() => {
                navigate("/door");
              }}
              className="text-green-800 hover:bg-green-100 md:mr-4"
            >
              <MeetingRoomIcon className="md:text-3xl" />
            </IconButton>
            <IconButton //Notification
              className="text-green-800 hover:bg-green-100 md:mr-4"
            >
              <NotificationsIcon className="md:text-3xl" />
            </IconButton>
            <IconButton //Avatar
              className="text-green-800 hover:bg-green-100 md:mr-4"
            >
              <Avatar alt="Avatar Placeholde " src={avatarimg} />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
