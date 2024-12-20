import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import NavBar from "../components/NavBar";

function AuthLayout() {
  const {isAuth} = useUser()
  return (
    <>
      {!isAuth ? (
        <Navigate to="/login" />
      ) : (
        <>
        <NavBar page='Dashboard'/>
          <Outlet />
        </>
      )}
    </>
  );
}

export default AuthLayout;
