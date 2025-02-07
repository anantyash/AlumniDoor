import {
  Avatar,
  IconButton,
  InputAdornment,
  InputBase,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  SearchIcon,
  VerifiedIcon,
  WorkspacePremiumIcon,
} from "../../assets/iconIndex";
import { ALUMNIDOOR49, logoIcon } from "../../assets/Images";

import dbService from "../../services/AD_DB/userDB";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function Messages() {
  const { userid, messageid } = useParams();
  const { newUser, users } = useUser();
  const viewTopRef = useRef(null);
  const [msgAccUser, setMsgAccUser] = useState([]);
  const [searchUser, setSearchUser] = useState([]);
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(false);

  const scrollToTop = (key) => {
    viewTopRef.current
      ?.querySelectorAll("#userList>NavLink")
      [key]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchMessageAccount = async () => {
      setLoader(true);
      const data = await dbService.getAllUser(userid, false);
      setMsgAccUser(data);
      setSearchUser(data); // Initialize searchUser  with all users
      setLoader(false);
    };

    fetchMessageAccount();
  }, [userid]);

  const handleSearch = useCallback(() => {
    if (value.trim() === "") {
      setSearchUser(msgAccUser); // Reset to all users if search value is empty
    } else {
      const filteredUsers = msgAccUser.filter((msg) =>
        msg.fullName.toLowerCase().includes(value.toLowerCase())
      );
      setSearchUser(filteredUsers);
    }
  }, [value, msgAccUser]);

  useEffect(() => {
    handleSearch();
  }, [value, handleSearch]);

  return (
    <div className="flex justify-center bg-gray-100 p-5">
      {/* ---------------------- Left Side --------------------- */}
      <div className="flex flex-col md:h-[400px] bg-white drop-shadow-xl rounded-l-xl">
        <div className="w-full flex justify-center py-5 bg-greenColor rounded-tl-xl">
          <div className="w-11/12 self-center drop-shadow-xl">
            <InputBase
              className="bg-white w-full rounded-full h-11 pl-5 pr-2 text-base"
              placeholder="Search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon className="text-greenColor" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
        </div>

        <div
        ref={viewTopRef}
          id="userList"
          className="w-full gap-2 pb-5 px-3 pt-2 flex flex-col overflow-y-scroll scrollbar-none"
        >
          {loader ? (
            <div className="w-[85%] flex flex-col gap-2">
              <div className=" flex w-full p-2  gap-3 rounded-2xl cursor-pointer">
                <Skeleton variant="circular" className="w-12 h-12 " />
                <div className=" flex flex-col h-full w-[70%] justify-center font-sans gap-2 ">
                  <Skeleton
                    variant="rounded"
                    className="w-full h-[13px] rounded-full"
                  />
                  <Skeleton variant="rounded" className="w-[80px] h-[0.5rem]" />
                </div>
              </div>
              <div className=" flex w-full   p-2  gap-3 rounded-2xl cursor-pointer">
                <Skeleton variant="circular" className="w-12 h-12 " />
                <div className=" flex flex-col h-full w-[70%] justify-center font-sans gap-2 ">
                  <Skeleton
                    variant="rounded"
                    className="w-full h-[13px] rounded-full"
                  />
                  <Skeleton variant="rounded" className="w-[80px] h-[0.5rem]" />
                </div>
              </div>
              <div className=" flex w-full  p-2  gap-3 rounded-2xl cursor-pointer">
                <Skeleton variant="circular" className="w-12 h-12 " />
                <div className=" flex flex-col h-full w-[70%] justify-center font-sans gap-2 ">
                  <Skeleton
                    variant="rounded"
                    className="w-full h-[13px] rounded-full"
                  />
                  <Skeleton variant="rounded" className="w-[80px] h-[0.5rem]" />
                </div>
              </div>
            </div>
          ) : searchUser.length > 0 ? (
            <div>
              {!value && (
                <NavLink
                  to={`${1}/`}
                  state={{
                    senderName: "AlumniDoor",
                    senderUserType: "Service Notification",
                    senderIsMentor: false,
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-greenTextColor no-underline w-[90%] flex text-black rounded-2xl mb-1 "
                      : " no-underline w-[90%] flex text-black rounded-2xl drop-shadow-lg mb-1"
                  }
                >
                  <div className=" flex w-[100%] hover:bg-greenTextColor p-2 gap-3 rounded-2xl cursor-pointer">
                    <Avatar className="w-12 h-12 " src={logoIcon} />
                    <div className=" flex flex-col h-full justify-center font-sans ">
                      <h4 className="flex gap-2 items-center line-clamp-1">
                        AlumniDoor
                        <VerifiedIcon className="text-lg text-greenColor pt-1" />
                      </h4>
                      <span className="flex items-center gap-1 text-sm ">
                        Service Notification
                      </span>
                    </div>
                  </div>
                </NavLink>
              )}

              {searchUser.map((msag) => (
                // <div
                //   key={msag.$id}
                //   className="w-full   flex flex-col items-center"
                // >
                <NavLink
                  to={`${msag.$id}/`}
                  state={{
                    senderName: msag.fullName,
                    senderUserType: msag.userType,
                    senderIsMentor: msag.mentor,
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-greenTextColor no-underline w-[90%] flex text-black rounded-2xl mb-1"
                      : "no-underline w-[90%] flex text-black rounded-2xl drop-shadow-lg mb-1"
                  }
                  onClick={() => scrollToTop(msag.$id)}
                >
                  <div className="flex w-[100%] hover:bg-greenTextColor p-2 gap-3 rounded-2xl cursor-pointer">
                    <Avatar className="w-12 h-12" src={ALUMNIDOOR49} />
                    <div className="flex flex-col h-full justify-center font-sans">
                      <h4 className="line-clamp-1">{msag.fullName}</h4>
                      <span className="flex text-sm items-center gap-1">
                        {msag.userType}
                        {msag.mentor && (
                          <WorkspacePremiumIcon className="text-orange-500 pt-1 text-base rounded-full" />
                        )}
                      </span>
                    </div>
                  </div>
                </NavLink>
                // </div>
              ))}
            </div>
          ) : (
            <div className="px-3 gap-2 pb-5 flex flex-col items-center w-full">
              <h4>No users found</h4>
            </div>
          )}
        </div>
      </div>

      {/* -------------------- Texting Area -------------------- */}
      <div className="md:w-[60%] px-2 md:h-[400px] flex relative drop-shadow-xl">
        {messageid ? (
          <Outlet />
        ) : (
          <p className="w-full bg-greenColor text-white rounded-r-xl flex justify-center items-center text-2xl font-sans font-semibold">
            Select a Chat to start messaging
          </p>
        )}
      </div>
    </div>
  );
}

export default Messages;
