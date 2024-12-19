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
import Dashboard from "./Pages/Dashboard.jsx";
import Mentorship from "./Pages/Mentorship.jsx";
import Signin from "./Pages/Signin.jsx";
import DonationPage from "./Pages/DonationPage.jsx";
import SignUp from "./components/SignUp.jsx";

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
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mentorship-program" element={<Mentorship />} />
      <Route path="/donation-page" element={<DonationPage />} />

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
