import { Avatar, Chip, IconButton, Tooltip } from "@mui/material";
import React, { forwardRef, useEffect, useState } from "react";
import { avatarimg } from "../assets/Images";
import {
  BadgeIcon,
  ModeEditOutlineRoundedIcon,
  SchoolIcon,
  StarsIcon,
  WorkspacePremiumIcon,
} from "../assets/iconIndex";
import { useNavigate } from "react-router-dom";
import { EditProfile } from "./index";

function UserCard({ user = {}, edit = false }, ref) {
  // const navigate = useNavigate();
  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => {
    //just rerender
  }, [openEdit]);

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
        {/* {console.log(openEdit)} */}

        <div className="text-center items-center flex flex-col mb-3  ">
          <Avatar className="w-20 h-auto mb-2" src={avatarimg} />
          <span className="font-semibold font-sans text-xl ">
            {/* Prince Kumar */}
            {/* {name} */}
            {user.fullName}
          </span>

          <span className="  font-sans flex text-sm ">
            {/* {degree} */}
            {/* Computer Science Engineering, */}
            {user.degree}
          </span>
          <span className="  font-sans flex text-sm ">
            {/* Batch 2024 */}
            {`Batch ${user.graduationYear}`}
            {/* {`Batch ${batch}`} */}
          </span>

          <p className=" font-sans flex items-center ">
            {" "}
            <span className="text-blue-700 px-1">
              <BadgeIcon className="text-lg pt-1" />
            </span>
            {/* Backend Developer */}
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
