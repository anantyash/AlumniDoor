import React from "react";
import landingimg from "../assets/landingimg.png";
import { Button } from "@mui/material";

function HeroSection() {
  return (
    <div // this div is container of all hero section
      className=" w-fit h-auto flex flex-col-reverse md:flex-row text-center items-center"
    >
      <div //this is use for left side written part
        className="md:w-3/5 md:h-96 p-4 md:pl-5 flex md:justify-evenly gap-8 flex-col selection:bg-green-400 "
      >
        <h1 className="text-6xl text-brown ">Connect. Inspire. Thrive.</h1>
        <p className="  text-lg px-10 font-sans ">
          <span className="font-medium text-xl">
            Empowering connections, inspiring success: {" "}
          </span>
          Our platform strengthens the bond between alumni and students, fostering a vibrant community that celebrates achievements, cultivates growth, and inspires lifelong learning.
        </p>
        <p className="text-lg px-10 font-sans">
       
        Together, we shape a future built on Collaboration, Opportunity, and Shared Success.
        </p>

        <div //this contain buttons
          className="flex justify-center gap-6 pt-3"
        >
          <Button
            className="text-greenColor duration-500 font-semibold border-greenColor border-2 hover:bg-greenColor hover:text-slate-50 "
            variant="outlined"
          >
            Join as Alumni
          </Button>
          <Button
            className="text-greenColor duration-500 font-semibold border-greenColor border-2 hover:bg-greenColor hover:text-slate-50 "
            variant="outlined"
          >
            Join as Student
          </Button>
        </div>
      </div>
      <div //this is used for right part only for image
        className=" w-11/12 md:w-2/5 h-auto "
      >
        <img src={landingimg} alt="Image" className="w-11/12 h-auto" />
      </div>
      
    </div>
  );
}

export default HeroSection;
