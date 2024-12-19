import React, { useState } from "react";
import logo from "../assets/logo2.png";
import avatarimg from "../assets/avatarimg.png";

import { Button, IconButton, Avatar, Divider } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ page }) => {
  const [mode, setMode] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const handletheme = () => {
    setMode(!mode);
  };

  return (
    <>
      {/* For Landing Page Nav Bar */}
      {page === "LandingPage" && (
        <div // Nav Container
          className=" w-auto h-fit flex md:items-center justify-between px-5 py-1 md:gap-0"
        >
          {" "}
          {/*bg-green-300*/}
          <div //For Contain Logo Image
            className="w-fit rounded-3xl flex-initial pt-2"
          >
            <Link to="/">
              <img src={logo} alt="" srcset="" className="max-w-72" />
            </Link>
          </div>
          <div className="w-fit h-fit self-center ">
            <div className="md:hidden">
              {openMenu === false && (
                <IconButton
                  className="text-green-400 hover:bg-green-50 transition-transform ease-in-out delay-300"
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              {openMenu === true && (
                <IconButton
                  className="text-green-400 hover:bg-green-50"
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
                md:p-0  md:bg-inherit
                px-10 py-5 rounded-md
                right-16 top-16 
                fixed 
                justify-evenly 
                font-bold 
                list-none 
                bg-green-200
             "
              >
                <li>
                  <NavLink to="/">
                    <Button
                      variant="text"
                      className="text-green-500 hover:bg-green-100 font-semibold"
                    >
                      Home
                    </Button>
                  </NavLink>
                </li>
                <li>
                  <Button
                    variant="text"
                    className="text-green-500 hover:bg-green-100 font-semibold"
                  >
                    People
                  </Button>
                </li>
                <li>
                  <Button
                    variant="text"
                    className="text-green-500 hover:bg-green-100 font-semibold"
                  >
                    Door
                  </Button>
                </li>
                <li>
                  <Button
                    variant="text"
                    className="text-green-500 hover:bg-green-100 font-semibold"
                  >
                    College
                  </Button>
                </li>
                <li>
                  <NavLink to="/dashboard">
                    <Button
                      variant="text"
                      className="text-green-500 hover:bg-green-100 font-semibold"
                    >
                      Dashboard
                    </Button>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div // For SignUp/login Button
            className="hidden md:flex flex-row gap-1 p-2 rounded-md bg-green-600 drop-shadow-md shadow-lg "
          >
            <Link to="/signup" className="h-full">
              <Button
                className="text-slate-50 bg-green-600 font-semibold w-1/2 h-full hover:bg-green-500 shadow-none hover:drop-shadow-md p-1"
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
                className="text-slate-50 bg-green-600 font-semibold hover:bg-green-400 h-full w-1/2 p-1 shadow-none hover:drop-shadow-md "
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
          className=" w-auto h-fit flex items-center justify-between px-2 md:px-5 py-1"
        >
          {" "}
          <div //For Contain Image
            className="w-fit rounded-3xl flex-initial pt-2"
          >
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                srcset=""
                className="max-w-64 md:max-w-72"
              />
            </Link>
          </div>
          <div // For Icons
            className=" px-2"
          >
            {mode === true && (
              <IconButton
                className="text-green-600 hover:bg-green-100 md:mr-4 transition-transform"
                onClick={handletheme}
              >
                <LightModeIcon className="md:text-4xl" />
              </IconButton>
            )}
            {mode === false && (
              <IconButton
                className="text-green-600 hover:bg-green-100 md:mr-4 transition-transform"
                onClick={() => {
                  setMode(!mode);
                }}
              >
                <DarkModeIcon className="md:text-4xl" />
              </IconButton>
            )}
            <IconButton className="text-green-600 hover:bg-green-100 md:mr-4">
              <NotificationsIcon className="md:text-4xl" />
            </IconButton>
            <IconButton className="text-green-600 hover:bg-green-100 md:mr-4">
              <Avatar alt="Avatar Placeholde " src={avatarimg} />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
