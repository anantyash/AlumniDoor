import React from "react";
import { IconButton, InputBase } from "@mui/material";
import { NavLink } from "react-router-dom";

import {
  DashboardIcon,
  HomeIcon,
  PeopleIcon,
  ChatIcon,
  SearchIcon,
} from "../assets/iconIndex";

function NetworkNav() {
  return (
    <>
      <div //For Second Navigation
        className=" flex  shadow-lg md:py-0 relative md:sticky md:top-0 md:bg-white"
      >
        <nav className="w-full flex bg-green-900 justify-center sticky bottom-0">
          <ul className=" flex justify-evenly w-full font-bold list-none p-2">
            {/* Dashboard */}
            <li>
              <NavLink>
                <IconButton className=" gap-2 text-white md:rounded-md bg-green-900 hover:bg-green-800 hover:shadow-xl text-lg font-semibold">
                  <DashboardIcon />
                  <p className="hidden md:inline-flex text-sm text-center">
                    Dashboard
                  </p>
                </IconButton>
              </NavLink>
            </li>

            {/* Home */}
            <li>
              <NavLink>
                <IconButton className="gap-2 text-white md:rounded-md bg-green-900 hover:bg-green-800 hover:shadow-xl text-lg font-semibold">
                  <HomeIcon />
                  <p className="text-sm hidden md:inline-flex">Home</p>
                </IconButton>
              </NavLink>
            </li>

            {/* Alumni-Directory */}
            <li>
              <NavLink>
                <IconButton className="  gap-2 text-white md:rounded-md bg-green-900 hover:bg-green-800 hover:shadow-xl text-lg font-semibold">
                  <PeopleIcon />
                  <p className="text-sm hidden md:inline-flex">
                    Alumni-Directory
                  </p>
                </IconButton>
              </NavLink>
            </li>

            {/* Chat */}
            <li>
              <NavLink>
                <IconButton className=" gap-2 text-white md:rounded-md bg-green-900 hover:bg-green-800 hover:shadow-xl text-lg font-semibold">
                  <ChatIcon />
                  <p className="hidden md:inline-flex text-sm">Messages</p>
                </IconButton>
              </NavLink>
            </li>

            {/* Search Button */}
            <li className="md:flex hidden">
              <div className=" bg-white h-fit rounded-2xl w-full justify-center">
                <IconButton>
                  <SearchIcon />
                </IconButton>
                <InputBase
                  className="px-2 text-sm bg-white rounded-2xl"
                  placeholder="Search ..."
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NetworkNav;
