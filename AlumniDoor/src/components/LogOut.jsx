import { IconButton } from "@mui/material";
import React from "react";
import authService from "../services/auth";
import { LogoutIcon } from "../assets/iconIndex";
import { useUser } from "../context/UserContext";

function LogOut({ className = "", iconClass = "" }) {
  const { checkAuth } = useUser();
  return (
    <>
      <IconButton
        className={`flex gap-2 text-black text-base font-semibold font-sans items-center ${className}`}
        onClick={() => {
          authService.logout();
          checkAuth(false);
        }}
      >
        <LogoutIcon className={`text-greenColor ${iconClass}`} /> Log Out
      </IconButton>
    </>
  );
}

export default LogOut;
