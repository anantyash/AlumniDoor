import React from "react";

import {
  mentoringimg,
  ALUMNIDOOR39,
  ALUMNIDOOR40,
  ALUMNIDOOR49,
} from "../assets";

import {
  Button,
  InputBase,
  Paper,
  Card,
  CardContent,
  IconButton,
  Fab,
  Divider,
  CardMedia,
  Avatar,
  Chip,
} from "@mui/material";
import { Diversity2Icon } from "../assets/iconIndex";

function Mentorship() {
  const length = 5;
  return (
    <>
      {/* <div //For Second Navigation
        className=" flex px-3 shadow-lg py-2 md:py-0 sticky top-24 bg-white"
      >
        <nav className="w-4/5 hidden md:inline-block ">
          <ul className=" flex justify-between font-bold list-none p-2 ">
            <li>
              <Button
                className="text-green-500 hover:bg-green-100 font-semibold"
                variant="text"
              >
                Engineering Mentors
              </Button>
            </li>
            <li>
              <Button
                className="text-green-500 hover:bg-green-100 font-semibold"
                variant="text"
              >
                Design Mentors
              </Button>
            </li>
            <li>
              <Button
                className="text-green-500 hover:bg-green-100 font-semibold"
                variant="text"
              >
                Startup Mentors
              </Button>
            </li>
            <li>
              <Button
                className="text-green-500 hover:bg-green-100 font-semibold"
                variant="text"
              >
                Product Mentors
              </Button>
            </li>
            <li>
              <Button
                className="text-green-500 hover:bg-green-100 font-semibold"
                variant="text"
              >
                Leadership Mentors
              </Button>
            </li>
          </ul>
        </nav>
        <div className="flex w-full md:w-1/4 justify-around md:flex-end">
          <Button
            className="font-semibold h-fit self-center hover:bg-green-600 bg-green-700"
            variant="contained"
          >
            Find Mentor
          </Button>
          <Button
            className="font-semibold h-fit self-center hover:bg-green-600 bg-green-700"
            variant="contained"
          >
            Join as Mentor
          </Button>
        </div>
      </div> */}

      <div //main (middle) container
        className=" flex flex-col-reverse md:flex-row w-full justify-around bg-neutral-50 py-5"
      >
        <div //Left part container
          className=" flex flex-col justify-center md:pt-30 gap-5 text-center md:text-left md:pl-20 h-auto"
        >
          {/* <p className="text-2xl text-brown font-semibold font-sans py-5">
            Learn a new skill, <br />
            Launch a project, <br />
            Land your dream career.
          </p> */}
          <h3 className="text-6xl pb-10 mt-16">One-on-1 Mentorship Program</h3>
          <Paper // its just a container treat it like Div
            className="  justify-self-start md:w-3/4  flex flex-col md:flex-row bg-green-50 outline-1 h-full md:h-fit outline-green-600 outline"
            component="form"
            sx={{
              p: "2px 4px",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              className="text-green-700 text-xl pb-2 md:pb-0"
              sx={{ ml: 2, flex: 1 }}
              placeholder="Search by role or batch"
            />

            <Button
              className="hover:bg-green-600 bg-green-700 font-semibold h-12 md:w-fit w-full shadow-none"
              variant="contained"
            >
              Find Mentor
            </Button>
          </Paper>

          {/* ----------  Card Part --------- */}

          <div className="mt-8 md:mt-10 flex justify-evenly w-fit text-center gap-5 ">
            <Card className="w-fit font-sans bg-transparent" variant="">
              <CardContent>
                <h3 className="py-2"> 50,000 +</h3>
                <p>Availabe Mentors</p>
              </CardContent>
            </Card>
            <Card className="w-fit font-sans bg-transparent" variant="">
              <CardContent>
                <h3 className="py-2">10,000 +</h3>
                <p>Matches Made</p>
              </CardContent>
            </Card>

            <Card // This card is invisible but still present here (remove invisible styling to show)
              className="w-fit hidden md:inline-block md:invisible"
              variant="outlined"
            >
              <CardContent>
                <h3>50,000+</h3>
                <p>Availabe Mentor</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div // Image Container
          className="md:w-2/6 self-center p-9 md:pr-10 md:py-10 "
        >
          <img src={mentoringimg} alt="Image" srcset="" className="w-full" />
        </div>
      </div>

      <div className="flex flex-col py-8 justify-center rounded-lg gap-2">
        <div className="p-5 flex flex-col gap-3 text-center text-2xl font-sans">
          <h2>Find a Mentor, Be a Mentor</h2>
          <p>Guiding the next generation, One connection at a time.</p>
        </div>
        <Divider className="self-center w-2/5 mb-4" flexItem />
        <div className="px-10 py-5 bg-neutral-50 justify-evenly flex overflow-x-scroll gap-4  ">
          {Array.from({ length: length }, (_, index) => (
            <Card className="min-w-64 font-sans flex flex-col justify-center text-center p-3 items-center rounded-xl">
              <CardMedia className="p-1 outline outline-greenColor rounded-full">
                <Avatar className="w-20 h-20 " src={ALUMNIDOOR49} />
              </CardMedia>
              <CardContent>
                <h4>Prince Kumar</h4>
                <p>Batch 2024</p>
                <p>Computer Science Engineering</p>
              </CardContent>
                <Chip className="font-sans font-semibold mb-3 bg-greenlightColor" label='Backend Engineer' />
              <Button
                className="bg-greenColor capitalize font-sans"
                variant="contained"
              >
                Message
              </Button>
              <Divider className="mt-6" flexItem />
              <CardContent className="self-start flex flex-wrap gap-2">
                <span className="font-semibold">Skills :</span>{" "}
                <span className="outline outline-neutral-50 p-1 rounded-md mx-1">
                  Leadership
                </span>
                <span className="outline outline-neutral-50 p-1 rounded-md mx-1">
                  UI/UX Designer
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className=" capitalize text-greenColor w-fit self-center bg-green-50 hover:bg-greenColor hover:text-white hover:font-semibold">
          Browse all Mentor
        </Button>
      </div>

      <Fab
        variant="extended"
        className="text-greenColor bg-green-50 hover:bg-white right-3 bottom-8 sticky flex gap-2 justify-self-end items-center p-4 font-semibold capitalize text-base group hover:flex "
      >
        <Diversity2Icon className="group-hover:rotate-180 transition-transform ease-in-out  delay-200" />
        <span className=" "> Join as Mentor</span>
      </Fab>
    </>
  );
}

export default Mentorship;
