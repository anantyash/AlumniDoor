import React, { useState } from "react";

import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Userprovider, useUser } from "./context/UserContext";

function App({ post }) {
  const { isAuth } = useUser();
  const [users, setUsers] = useState([]);

  const newUser = (userData) => {
    setUsers((prevUsers) => [...prevUsers, { id: Date.now(), ...userData }]);
    // setUsers((prevUsers) => [...prevUsers, { id: Date.now(), ...userData }]);
  };
  return (
    <>
      <Userprovider value={{ users, newUser, isAuth }}>
        <Outlet />
        <Footer />
      </Userprovider>
    </>
  );
}

export default App;
