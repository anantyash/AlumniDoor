import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StyledEngineProvider } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";

import Mentorship from "./Pages/Mentorship.jsx";

import DonationPage from "./Pages/DonationPage.jsx";
import SignUp from "./Pages/SignUp.jsx";
import AuthLayout from "./_auth/AuthLayout.jsx";
import Networking from "./Pages/Networking.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import Door from "./Pages/Door.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/door/:userid" element={<Door />} />
        <Route path="/mentorship-program" element={<Mentorship />} />
        <Route path="/donation-page" element={<DonationPage />} />
        <Route path="/network" element={<Networking />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </StrictMode>
);
