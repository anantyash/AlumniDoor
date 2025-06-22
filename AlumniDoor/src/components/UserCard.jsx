import { Avatar, Chip, IconButton, Tooltip } from "@mui/material";
import React, { forwardRef, useEffect, useState } from "react";
import { ALUMNIDOOR39, ALUMNIDOOR49, avatarimg } from "../assets/Images";
import {
  BadgeIcon,
  ModeEditOutlineRoundedIcon,
  SchoolIcon,
  StarsIcon,
  WorkspacePremiumIcon,
} from "../assets/iconIndex";

import { EditProfile } from "./index";
function UserCard({ user = {}, edit = false }, ref) {
  const [openEdit, setOpenEdit] = useState(false);

  const pfp = { ALUMNIDOOR39, ALUMNIDOOR49 };

  useEffect(() => {
    //just rerender
  }, [openEdit]);

  // console.log("PFP:", user.profilePictureUrl);
  return (
    <>
      {edit ? (
        <Tooltip title="Edit Profile">
          <IconButton
            className="self-end relative hover:bg-neutral-200"
            onClick={() => setOpenEdit(true)}
          >
            <ModeEditOutlineRoundedIcon className="text-sm text-greenColor  " />
          </IconButton>
        </Tooltip>
      ) : null}

      {openEdit && (
        <EditProfile
          user={user}
          open={openEdit}
          close={(val) => setOpenEdit(val)}
        />
      )}
      <div //Profile Card
        className=" w-[228px] flex flex-col self-center justify-center p-4 rounded-lg"
        ref={ref}
      >
        <div className="text-center items-center flex flex-col mb-3  ">
          <Avatar
            className="w-20 h-auto mb-2"
            src={pfp[user.profilePictureUrl]}
          />
          <span className="font-semibold font-sans text-xl ">
            {user.fullName}
          </span>

          <span className="  font-sans flex text-sm ">{user.degree}</span>
          <span className="  font-sans flex text-sm ">
            {`Batch ${user.graduationYear}`}
          </span>

          <p className=" font-sans flex items-center ">
            {" "}
            <span className="text-blue-700 px-1">
              <BadgeIcon className="text-lg pt-1" />
            </span>
            {user.userType === "Alumni"
              ? user.currentProfession
              : user.userType}
          </p>
        </div>

        {user.mentor ? (
          <Chip
            className="bg-orange-100 cursor-default w-fit self-center font-sans font-semibold"
            label="Mentor"
            icon={<WorkspacePremiumIcon className="text-orange-500" />}
          />
        ) : (
          <Chip
            className={
              user.userType === "Alumni"
                ? "bg-slate-200 cursor-default w-fit self-center font-sans font-semibold "
                : "bg-yellow-100 cursor-default w-fit self-center font-sans font-semibold"
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
    </>
  );
}

export default forwardRef(UserCard);
