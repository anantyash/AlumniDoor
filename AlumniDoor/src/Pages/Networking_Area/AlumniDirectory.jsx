import {
  Avatar,
  Button,
  Chip,
  CircularProgress,
  IconButton,
  Tooltip,
  Zoom,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ALUMNIDOOR22,
  ALUMNIDOOR23,
  ALUMNIDOOR29,
  ALUMNIDOOR37,
  ALUMNIDOOR39,
  ALUMNIDOOR47,
  ALUMNIDOOR49,
} from "../../assets/Images";
import { ForumIcon, LinkedInIcon, WorkIcon } from "../../assets/iconIndex";
import { useParams } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function AlumniDirectory() {
  const length = 6;
  const names = [
    "Rajesh Kumar",
    "Anita Desai",
    "Vikram Patel",
    "Rani Sharma",
    "Amitabh Singh",
    "Neha Gupta",
  ];

  const companies = [
    "Wipro",
    "Infosys",
    "TCS",
    "HCL",
    "Tech Mahindra",
    "Cognizant",
  ];

  const avatars = [
    ALUMNIDOOR22,
    ALUMNIDOOR23,
    ALUMNIDOOR29,
    ALUMNIDOOR47,
    ALUMNIDOOR37,
    ALUMNIDOOR39,
  ];
  const { users } = useUser();
  const { userid } = useParams();
  const [user, setUser] = useState({});
  // const [loader, setLoader] = useState(true);

  const pfp = { ALUMNIDOOR39, ALUMNIDOOR49 };
  useEffect(() => {
    fetchUser();
  });

  const fetchUser = () => {
    setUser(() => users.find((user) => user.id === userid));
    // setLoader(false);
  };
  return (
    <>
      {/* {loader ? (
      <div className="w-full h-[70vh] flex justify-center items-center bg-neutral-100 ">
        <CircularProgress color="success" />
      </div>
      // ) : ( */}
      <div className="bg-neutral-100 pt-5 flex flex-col items-center gap-5">
        <div className=" w-4/5 md:w-1/2 flex justify-self-center justify-evenly items-center p-5 bg-white rounded-lg drop-shadow-lg">
          <Avatar className="w-auto h-20" src={pfp[user.profilePictureUrl]} />
          <div className="text-center flex flex-col font-sans gap-1 ">
            <h3 className="text-2xl justify-self-start text-left  font-bold text-gray-800">
              Hey, {user.fullName}
            </h3>

            <p className="text-lg text-gray-600">
              Here you can connect with Alumni, Mentors, and Students.
            </p>
          </div>
        </div>

        <div className="md:w-4/5 justify-self-center p-5 flex flex-wrap gap-5 justify-evenly rounded-lg drop-shadow-2xl">
          {Array.from({ length: length }, (_, index) => (
            <div
              key={index}
              className="w-60 bg-greenlightColor outline outline-greenColor drop-shadow-lg rounded-lg p-2 "
            >
              <div className="flex flex-col gap-2 p-5 rounded-br-full h-fit shadow-xl outline outline-4 outline-white bg-greenTextColor cursor-default">
                <h2>{names[index]}</h2>
                <span className="flex flex-wrap mr-9">
                  Computer Science Engineering
                </span>
                <p>Batch 2024</p>
                {/* <Chip
                  icon={<WorkIcon className="text-base  text-black" />}
                  className="w-fit max-w-32 p-2 text-center bg-greenBgColor font-semibold"
                  label={companies[index]}
                /> */}
              </div>
              <Avatar
                className="justify-self-end h-16 w-16 outline outline-2 drop-shadow-xl outline-white -translate-y-28 -translate-x-1"
                src={avatars[index]}
              />
              <div className=" -mt-10 flex justify-around relative mb-2">
                <Button
                  variant="contained"
                  startIcon={<LinkedInIcon />}
                  className="items-center h-fit font-semibold rounded-full"
                >
                  Connect
                </Button>

                <Tooltip title="Chat Here" slots={{ transition: Zoom }} arrow>
                  <IconButton className="relative -mt-5 -translate-y-5 p-4  shadow-xl bg-greenColor hover:opacity-80">
                    <ForumIcon className="text-2xl  text-white" />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default AlumniDirectory;
