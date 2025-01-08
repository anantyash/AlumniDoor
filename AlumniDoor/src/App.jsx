import React, { useState } from "react";

import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Userprovider, useUser } from "./context/UserContext";

function App({ post }) {
  const { isAuth } = useUser();
  const [users, setUsers] = useState([]);

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
      <Userprovider value={{ users, newUser, isAuth, updateUser }}>
        <Outlet />
        <Footer />
      </Userprovider>
    </>
  );
}

export default App;
