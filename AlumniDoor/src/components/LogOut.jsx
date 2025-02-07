import { IconButton } from "@mui/material";
import React from "react";
import authService from "../services/auth";
import { LogoutIcon } from "../assets/iconIndex";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

function LogOut({ className = "", iconClass = "" }) {
  const navigate = useNavigate();
  const { checkAuth } = useUser();
  return (
    <>
      <IconButton
        //
        className={`flex gap-2 text-black text-base font-semibold font-sans items-center ${className}`}
        // to={"/signup"}
        onClick={() => {
          authService.logout();
          checkAuth(false);
          // navigate("/");
        }}
        // className=" no-underline justify-self-start mb-2 text-black text-base hover:text-greenTextColor font-semibold font-sans flex items-center gap-2 "
      >
        <LogoutIcon className={`text-greenColor ${iconClass}`} /> Log Out
      </IconButton>
    </>
  );
}

export default LogOut;
