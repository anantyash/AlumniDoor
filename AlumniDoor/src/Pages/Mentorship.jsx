import React from "react";
import NavBar from "../components/NavBar";

import mentoringimg from "../assets/mentoringimg.png";

import { Button, InputBase, Paper, Card, CardContent } from "@mui/material";
import Footer from "../components/Footer";

function Mentorship() {
  return (
    <>
      {/* <NavBar page="Dashboard" /> */}
      <div //For Second Navigation
        className=" flex px-3 shadow-lg py-2 md:py-0 sticky top-0 bg-white"
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
            {/* <li>
              <Button
                className="text-green-500 hover:bg-green-100 font-semibold"
                variant="text"
              >
                Career Coaches
              </Button>
            </li> */}
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
      </div>

      <div //main (middle) container
        className=" flex flex-col-reverse md:flex-row w-full justify-around"
      >
        <div //Left part container
          className=" flex flex-col justify-center md:pt-40 gap-5 text-center md:text-left md:pl-20 h-auto"
        >
          <p className="text-2xl text-brown font-semibold font-sans py-5">
            Learn a new skill, <br />
            Launch a project, <br />
            Land your dream career.
          </p>
          <h3 className="text-6xl pb-10">
            One-on-1 Mentorship <br /> Program
          </h3>
          <Paper // its just a container treat it like Div
            className=" self-center md:w-full flex flex-col md:flex-row bg-green-50 outline-1 h-full md:h-fit outline-green-600 outline"
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

          <div 
          className="mt-8 md:mt-20 flex justify-evenly ">
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

      {/* <Footer /> */}
    </>
  );
}

export default Mentorship;
