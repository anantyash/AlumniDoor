import React, { useState } from "react";
import logo from "../assets/logo2.png";

import { Button, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const NavBar = ({ page }) => {
  const [mode, setMode] = useState(true);

  const handletheme =()=>{
    setMode(!mode)
  }

  return (
    <>
      {page === "LandingPage" && (
        <div // Nav Container
          className=" w-auto h-fit flex items-center justify-between px-5 py-1"
        >
          {" "}
          {/*bg-green-300*/}
          <div //For Contain Image
            className="w-fit rounded-3xl flex-initial pt-2"
          >
            <img src={logo} alt="" srcset="" className="max-w-72" />
          </div>
          <nav //For Nav Link
            className=" w-1/2"
          >
            <ul className="flex justify-evenly  font-bold list-none">
              <li>
                <Button
                  variant="text"
                  className="text-green-500 hover:bg-green-100 font-semibold"
                >
                  Home
                </Button>
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
                <Button
                  variant="text"
                  className="text-green-500 hover:bg-green-100 font-semibold"
                >
                  Dashboard
                </Button>
              </li>
            </ul>
          </nav>
          <div // For SignUp/login Button
            className=""
          >
            <Button
              className="text-slate-50 bg-green-600 font-semibold hover:bg-green-400"
              variant="contained"
            >
              SignUp / Login
            </Button>
          </div>
        </div>
      )}
      {page === "Dashboard" && (
        <div // Nav Container
          className=" w-auto h-fit flex items-center justify-between px-5 py-1"
        >
          {" "}
          {/*bg-green-300*/}
          <div //For Contain Image
            className="w-fit rounded-3xl flex-initial pt-2"
          >
            <img src={logo} alt="" srcset="" className="max-w-72" />
          </div>
          {/* <nav //For Nav Link
            className=" w-1/2"
          >
            <ul className="flex justify-evenly  font-bold list-none">
              <li>
                <Button
                  variant="text"
                  className="text-green-500 hover:bg-green-100 font-semibold"
                >
                  Home
                </Button>
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
                <Button
                  variant="text"
                  className="text-green-500 hover:bg-green-100 font-semibold"
                >
                  Dashboard
                </Button>
              </li>
            </ul>
          </nav> */}
          <div // For SignUp/login Button
          >
            {mode === true && (
              <IconButton
                className="text-green-600 hover:bg-green-100 mr-4 transition-transform"
                onClick={handletheme}
                
              >
                <LightModeIcon className="text-4xl" />
              </IconButton>
            )}
            {mode === false && (
              <IconButton
                className="text-green-600 hover:bg-green-100 mr-4 transition-transform"
                onClick={() => {
                  setMode(!mode);
                }}
              >
                <DarkModeIcon className="text-4xl" />
              </IconButton>
            )}
            <IconButton className="text-green-600 hover:bg-green-100 mr-4">
              <NotificationsIcon className="text-4xl" />
            </IconButton>
            <IconButton className="text-green-600 hover:bg-green-100 ">
              <AccountCircleIcon className="text-5xl" />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
