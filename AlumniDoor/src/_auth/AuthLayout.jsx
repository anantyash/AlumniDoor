import React from "react";
import { Outlet, Navigate, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { NavBar, Footer } from "../components/";

function AuthLayout() {
  const { isAuth } = useUser();
  const { userid } = useParams();
  return (
    <>
      {!isAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <NavBar page="Dashboard" userId={userid} />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default AuthLayout;
