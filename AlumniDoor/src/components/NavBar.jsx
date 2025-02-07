import React, { forwardRef, useState } from "react";
import { logo, avatarimg } from "../assets/Images";

import {
  Button,
  IconButton,
  Avatar,
  Divider,
  Backdrop,
  Paper,
  Menu,
  MenuItem,
  Drawer,
  Box,
  Chip,
  Tooltip,
} from "@mui/material";
import {
  CloseIcon,
  NotificationsIcon,
  MenuIcon,
  MeetingRoomIcon,
  WorkspacePremiumIcon,
  HomeIcon,
  SchoolIcon,
  Diversity1Icon,
  StarsIcon,
} from "../assets/iconIndex";

import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import ProfileCard from "./UserCard";
import { useUser } from "../context/UserContext";
import LogOut from "./LogOut";
import InfoCard from "./InfoCard";
// const {userid} =useParams()
const NavBar = ({ page, userId }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const { users } = useUser();

  let user = users.find((user) => user.id === userId);
  // console.log('serId from navbar', userId)

  // const name = user.fullName.split(" ", 1);

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
                {/* Home */}
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
                  {/* <Backdrop open={openDoor}>
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
                  </Backdrop> */}
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
          <div //For logo Image
            className="w-fit  flex-initial"
          >
            <Link to={`/door/${userId}`}>
              <img src={logo} alt="Logo" className="max-w-64 md:max-w-72" />
            </Link>
          </div>
          <div // For Icons
            className=" px-2 pt-5"
          >
            <Tooltip title={"Go to Door"} arrow={true}>
              <IconButton // Door
                onClick={() => {
                  navigate(`/door/${userId}`);
                }}
                className="text-green-800 hover:bg-greenlightColor md:mr-4"
              >
                <MeetingRoomIcon className="md:text-3xl" />
              </IconButton>
            </Tooltip>
            <Tooltip title={"Notificaton"} arrow={true}>
              <IconButton //Notification
                className="text-green-800 hover:bg-greenlightColor md:mr-4"
              >
                <NotificationsIcon className="md:text-3xl" />
              </IconButton>
            </Tooltip>
            <Tooltip title={"View Profile"} arrow={true}>
              <IconButton //Avatar
                className="text-green-800 md:mr-4 gap-2 rounded-full pr-3 md:bg-greenlightColor"
                onClick={() => {
                  setOpenDrawer(true);
                }}
              >
                <Avatar alt="Avatar Placeholder " src={avatarimg} />
                <span className=" hidden md:inline-block text-base pb-1 font-sans font-semibold self-center">
                  Hii, {user.fullName.split(" ", 1)}
                </span>
              </IconButton>
            </Tooltip>
            <Drawer
              anchor="right"
              open={openDrawer}
              variant="persistent"
              hideBackdrop={true}
              onClose={() => {
                setOpenDrawer(false);
              }}
              sx={{}}
            >
              <div className="w-72 h-svh p-5 flex flex-col font-sans">
                {/* <div className="flex w-full px-2 justify-between items-center">
                  <span className="font-semibold font-sans">
                    Hello, <span className="font-bold text-greenColor">Mr. {user.fullName}</span> 
                  </span>
                  </div> */}
                <IconButton
                  className="self-end relative  hover:bg-neutral-200"
                  onClick={() => setOpenDrawer(false)}
                >
                  <CloseIcon className="text-lg text-greenColor  " />
                </IconButton>
                <Divider className="mt-3 mb-4 bg-neutral-400" />
                <div className="flex py-3 justify-center gap-4 mt-3 ">
                  <Avatar
                    className=" w-20 h-20 self-center"
                    alt="Avatar Placeholder "
                    src={avatarimg}
                  />
                  <div className=" w-fit flex flex-col p-2">
                    {" "}
                    <span className="font-semibold">{user.fullName}</span>
                    <span className="text-sm">{user.email}</span>
                    {/* <span className="text-sm">{user.currentProfession}</span> */}
                    {user.mentor ? (
                      <Chip
                        className="bg-orange-100 cursor-default w-fit mt-2 font-sans font-semibold"
                        label="Mentor"
                        icon={
                          <WorkspacePremiumIcon className="text-orange-500" />
                        }
                      />
                    ) : (
                      <Chip
                        className={
                          user.userType === "Alumni"
                            ? "bg-slate-200 cursor-default w-fit mt-2 font-sans font-semibold "
                            : "bg-yellow-100 cursor-default w-fit mt-2 font-sans font-semibold"
                        }
                        label={user.userType}
                        icon={
                          user.userType === "Alumni" ? (
                            <StarsIcon className="text-slate-500" />
                          ) : (
                            <SchoolIcon className="text-yellow-900" />
                          )
                        }
                      />
                    )}
                  </div>
                  {/* name course  */}
                </div>
                {/* <Divider className="mt-5 mb-4" /> */}
                <div className="flex py-2 justify-center mt-3">
                  {user.mentor ? (
                    <InfoCard
                      data={"10 Students"}
                      title={"Total Guided Growth"}
                      className="text-center bg-green-100 w-full"
                    />
                  ) : user.userType === "Alumni" ? (
                    <InfoCard
                      data={"₹ 200"}
                      title={"Your Contributions"}
                      className="text-center bg-greenlightColor w-full"
                    />
                  ) : (
                    <InfoCard
                      data={"5"}
                      title={"Connected Mentors"}
                      className="text-center bg-greenBgColor w-full"
                    />
                  )}
                </div>

                <Divider className="mt-5 mb-4" />
                <LogOut
                  className="  rounded-full bg-greenlightColor text-sm hover:bg-greenBgColor"
                  iconClass="text-lg"
                />
                {/* <ProfileCard /> */}
              </div>
            </Drawer>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
