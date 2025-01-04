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
import Dashboard from "./Pages/Door.jsx";
import Mentorship from "./Pages/Mentorship.jsx";

import DonationPage from "./Pages/DonationPage.jsx";
import SignUp from "./Pages/SignUp.jsx";
import AuthLayout from "./_auth/AuthLayout.jsx";
import Networking from "./Pages/Networking.jsx";
import LoginPage from "./Pages/LoginPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path:"",
//         element:<LandingPage/>
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/door" element={<Dashboard />} />
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
