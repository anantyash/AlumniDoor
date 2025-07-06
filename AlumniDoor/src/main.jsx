import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import { StyledEngineProvider } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  LandingPage,
  DonationPage,
  SignUp,
  LoginPage,
  Door,
  Network_Home,
  AlumniDirectory,
  Messages,
  SupportPage,
  Mentors,
  Mentorship_home,
  Payment_Gateway,
  Mentorship_Layout,
  Networking_Layout,
  Donation_Layout,
  Error403,
} from "./Pages";

import AuthLayout from "./_auth/AuthLayout.jsx";

import { ChattingArea } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<LandingPage />} />
      <Route element={<AuthLayout />}>
        {/* --------------------- Door ------------------- */}
        <Route path="/door/:userid" element={<Door />} />

        {/* ---------------- Networking Area-------------- */}

        <Route path="/network/:userid" element={<Networking_Layout />}>
          <Route path="home" element={<Network_Home />} />
          <Route path="alumni-directory" element={<AlumniDirectory />} />
          <Route path="messages" element={<Messages />}>
            <Route path=":messageid/" element={<ChattingArea />} />
          </Route>
        </Route>

        {/* -------------- Mentorship Program ------------- */}

        <Route
          path="/mentorship-program/:userid/"
          element={<Mentorship_Layout />}
        >
          <Route path="" element={<Mentorship_home />} />
          <Route path="mentors?" element={<Mentors />} />
        </Route>

        {/* ---------------- Donation Portal --------------- */}

        <Route path="donation-portal/:userid" element={<Donation_Layout />}>
          <Route path="" element={<DonationPage />} />
          <Route path="payment/" element={<Payment_Gateway />} />
          <Route path="error/" element={<Error403 />} />
        </Route>

        {/* ----------------- Support Page ------------------ */}

        <Route path="/support/:userid" element={<SupportPage />} />
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
