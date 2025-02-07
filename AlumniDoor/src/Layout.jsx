import React, { useState } from "react";

import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import { Userprovider } from "./context/UserContext";
import { CircularProgress } from "@mui/material";

function Layout() {
  const navigation = useNavigation();
  const location = useLocation();
  const isNavigating = Boolean(navigation.location);
  // console.log("IsNavigating: ", isNavigating);

  const [users, setUsers] = useState([]);
  const [isAuth, setIsAuth] = useState(Boolean);

  const checkAuth = (auth) => {
    setIsAuth(auth);
  };

  const newUser = (userData) => {
    setUsers((prevUsers) => [...prevUsers, { ...userData }]);
    // setUsers((prevUsers) => [...prevUsers, { id: Date.now(), ...userData }]);
  };

  const updateUser = (userid, userData) => {
    setUsers((prevUsers) =>
      prevUsers.map((prevUser) =>
        prevUser.id === userid ? { ...prevUser, ...userData } : prevUser
      )
    );
    // console.log(users);
  };

  return (
    <>
      <Userprovider value={{ users, newUser, isAuth, updateUser, checkAuth }}>
        {isNavigating ? <CircularProgress /> : <Outlet />}
      </Userprovider>
    </>
  );
}

export default Layout;
