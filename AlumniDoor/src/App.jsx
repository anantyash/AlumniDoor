import React from "react";
import Signin from "./Pages/Signin";
import SignUp from "./components/SignUp";
import LandingPage from "./Pages/LandingPage";

import { StyledEngineProvider } from "@mui/material";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <>
        {/* <LandingPage /> */}
        <Dashboard/>
      </>
    </StyledEngineProvider>
  );
}

export default App;
