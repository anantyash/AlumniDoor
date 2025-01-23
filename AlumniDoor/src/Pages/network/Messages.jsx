import {
  Avatar,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  TextField,
} from "@mui/material";
import React from "react";
import {
  SearchIcon,
  StarsIcon,
  VerifiedIcon,
  WorkspacePremiumIcon,
} from "../../assets/iconIndex";
import { ALUMNIDOOR39, ALUMNIDOOR40, ALUMNIDOOR49 } from "../../assets";
import ChattingArea from "../../components/ChattingArea";

function Messages() {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-5">
      <div // For Left Side
        className="flex flex-col h-screen w-1/4 bg-greenColor px-4 pt-5 p-2 rounded-l-xl"
      >
        <div //for Search baar
          className=" w-11/12 self-center drop-shadow-xl"
        >
          <InputBase
            className="bg-white w-full rounded-full h-11 pl-5 pr-2 text-base"
            placeholder="Search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon className="text-greenColor" />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <Divider className="my-4 border-white" flexItem />
        {/* Connected People */}
        <div className="w-11/12 flex flex-col self-center items-center gap-2  ">
          <div className=" flex w-full text-white hover:text-black hover: [&>div>h3>*]:hover:text-greenColor hover:bg-greenTextColor p-3 gap-5 rounded-2xl drop-shadow-lg cursor-pointer">
            <Avatar className="w-14 h-14 " src={ALUMNIDOOR49} />
            <div className=" flex flex-col h-full justify-center font-sans">
              <h3 className="flex gap-2 items-center">AlumniDoor <VerifiedIcon className="text-l text-greenBgColor pt-1" /> </h3>
              <span className="flex items-center gap-1 ">
                Service Notification
              </span>
              {/* <Chip
                className="bg-slate-200 cursor-default w-fit self-center font-sans font-semibold"
                label="Alumni"
                icon={<StarsIcon className="text-slate-500" />}
              /> */}
            </div>
          </div>
          <div className=" flex w-full text-white hover:text-black hover:bg-greenTextColor p-3 gap-5 rounded-2xl drop-shadow-lg cursor-pointer">
            <Avatar className="w-14 h-14 " src={ALUMNIDOOR49} />
            <div className=" flex flex-col h-full justify-center font-sans">
              <h3>Narendra Modi</h3>
              <span className="flex items-center gap-1 ">
                {" "}
                Mentor{" "}
                <WorkspacePremiumIcon className="text-orange-500 pt-1 text-base rounded-full" />
              </span>
              {/* <Chip
                className="bg-slate-200 cursor-default w-fit self-center font-sans font-semibold"
                label="Alumni"
                icon={<StarsIcon className="text-slate-500" />}
              /> */}
            </div>
          </div>
          <div className=" flex w-full text-white hover:text-black hover:bg-greenTextColor p-3 gap-5 rounded-2xl drop-shadow-lg cursor-pointer">
            <Avatar className="w-14 h-14 " src={ALUMNIDOOR49} />
            <div className=" flex flex-col h-full justify-center font-sans">
              <h3>Phunsukh Wangdu</h3>
              <span className="flex items-center gap-1 ">
                {" "}
                Alumni{" "}
                {/* <WorkspacePremiumIcon className="text-orange-500 text-base rounded-full" /> */}
              </span>
            </div>
          </div>
          <div className=" flex w-full text-white hover:text-black hover:bg-greenTextColor p-3 gap-5 rounded-2xl drop-shadow-lg cursor-pointer">
            <Avatar className="w-14 h-14 " src={ALUMNIDOOR39} />
            <div className=" flex flex-col h-full justify-center font-sans">
              <h3>Pia Sahastrabuddhe</h3>
              <span className="flex items-center gap-1 ">
                {" "}
                Student{" "}
                {/* <WorkspacePremiumIcon className="text-orange-500 text-base rounded-full" /> */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div //For chatting Area
        className="w-3/5 p-2 pt-5 h-screen flex relative -top-5 "
      >
        {/* Chat Area 
                    This will have Component
                
                */}
                <ChattingArea/>
      </div>
    </div>
  );
}

export default Messages;
