import { Button, Divider } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "../assets/iconIndex";
import { forbidden } from "../assets/Images";

function Error403() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-96 gap-5 bg-neutral-100">
      <div className="flex justify-center items-center gap-2">
        <img className="w-20 h-20" src={forbidden} alt="Forbidden" />
        <h1 className="text-7xl text-[#000000] outline-1 "> 403 </h1>
      </div>
      {/* <Divider className="py-2 w-[50%] self-center" variant="middle" flexItem /> */}
      <h1 className="text-[#ff3b3b] text-5xl "> Access Denied</h1>
      {/* <h3 className="text-gray-800 text-3xl ">Access Denied</h3> */}
      <h3 className="text-gray-800 text-xl">
        Access to this page is not permitted for your account.
      </h3>

      <h3 className="text-gray-800 text-xl  bg-yellow-200 px-1 rounded">
        Oops! This page is meant just for our Alumni.
      </h3>

      {/* <Link to="-1" className="text-blue-500 hover:underline">
        Go to Home
      </Link> */}
      <Button
        variant="contained"
        className="bg-greenColor h-fit flex justify-self-end capitalize rounded-s"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </div>
  );
}

export default Error403;
