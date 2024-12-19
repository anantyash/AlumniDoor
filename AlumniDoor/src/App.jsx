import React from "react";
import Signin from "./Pages/Signin";
import SignUp from "./components/SignUp";
import LandingPage from "./Pages/LandingPage";

import { StyledEngineProvider } from "@mui/material";
import Dashboard from "./Pages/Dashboard";
import Mentorship from "./Pages/Mentorship";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <NavBar page=" " /> */}
      <Outlet />
      <Footer />
      {/* <LandingPage /> */}
      {/* <Dashboard/> */}
      {/* <Mentorship/> */}
    </>
  );
}

export default App;
