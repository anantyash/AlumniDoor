import React, { useState } from "react";

import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Userprovider, useUser } from "./context/UserContext";

function App({post}) {
  const { isAuth } = useUser();
  const [users, setUsers] = useState([]);

  const newUser = (user) => {
    setUsers((prev) => [{ id: Date.now(), ...user }, ...prev]);
  };
  return (
    <>
      <Userprovider value={{ newUser, isAuth }}>
        <Outlet />
        <Footer />
      </Userprovider>
    </>
  );
}

export default App;
