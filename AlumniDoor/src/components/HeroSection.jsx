import React from "react";
import landingimg from "../assets/landingimg.png";
import { Button } from "@mui/material";

function HeroSection() {
  return (
    <div // this div is container of all hero section
      className=" w-lvw  flex text-center items-center"
    >
      <div //this is use for left side written part
        className="w-3/5 h-96 pl-5 flex justify-evenly flex-col selection:bg-green-400 "
      >
        <h1 className="text-6xl text-brown ">Connect. Inspire. Thrive.</h1>
        <p className="  text-lg px-10 font-sans    ">
          <span className="font-medium text-xl">
            Empowering connections, inspiring success:
          </span>
          Our platform bridges <br /> alumni and students to build a supportive
          community for mentorship, <br />
          networking, and lifelong learning.
        </p>
        <p className="text-lg px-10 font-sans">
          {" "}
          Together, we create opportunities, celebrate achievements, and <br />
          drive growth for a brighter future.
        </p>

        <div //this contain buttons
          className="flex justify-center gap-6 pt-3"
        >
          <Button
            className="text-green-500 duration-500 font-semibold border-green-600 border-2 hover:bg-green-600 hover:text-slate-50 "
            variant="outlined"
          >
            Join as Alumni
          </Button>
          <Button
            className="text-green-500 duration-500 font-semibold border-green-600 border-2 hover:bg-green-600 hover:text-slate-50 "
            variant="outlined"
          >
            Join as Student
          </Button>
        </div>
      </div>
      <div //this is used for right part only for image
        className="  w-2/5 h-auto "
      >
        <img src={landingimg} alt="Image" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default HeroSection;
