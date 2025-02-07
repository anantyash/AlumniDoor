import React, { useEffect, useState } from "react";

import { mentoringimg, ALUMNIDOOR49 } from "../../assets/Images";

import {
  Button,
  InputBase,
  Paper,
  Fab,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Diversity2Icon } from "../../assets/iconIndex";
import { InfoCard, ProfileCard } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import dbService from "../../services/AD_DB/userDB";

function Mentorship_home() {
  const { userid } = useParams();
  const navigate = useNavigate();
  const [mentors, setMentors] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchMentors = async () => {
    await dbService
      .getAllMentors(userid, true)
      .then((data) => setMentors(data));

    setLoader(false);
  };

  useEffect(() => {
    setLoader(true);
    fetchMentors();
  }, []);

  return (
    <>
      <Divider className="md:top-24 sticky z-40" />
      <div //main (middle) container
        className=" flex flex-col-reverse md:flex-row w-full justify-around bg-neutral-100 py-8"
      >
        <div //Left part container
          className=" flex flex-col justify-center gap-5 text-center md:text-left md:pl-20 h-auto"
        >
          {/* <p className="text-2xl text-brown font-semibold font-sans py-5">
            Learn a new skill, <br />
            Launch a project, <br />
            Land your dream career.
          </p> */}
          <h3 className="text-6xl pb-10 w-[150%] ">
            Your Mentor, Your Journey
          </h3>
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

          <div className="mt-8 md:mt-10 flex justify-evenly w-fit text-center gap-5  ">
            <InfoCard
              data={"30,000 +"}
              title={"Active Mentors"}
              className="bg-neutral-100"
            />
            <InfoCard
              data={"10,000 +"}
              title={"Guided Growth"}
              className="bg-neutral-100"
            />
          </div>
        </div>
        <div // Image Container
          className="md:w-2/6 self-center p-9 md:pr-10 md:py-10 "
        >
          <img src={mentoringimg} alt="Image" className="w-full" />
        </div>
      </div>

      {/* ------------- Mentors Container ---------------- */}

      <div className="flex flex-col pt-8 justify-center rounded-lg gap-2">
        <div className="p-5 flex flex-col gap-3 text-center text-2xl font-sans">
          <h2>Find a Mentor, Be a Mentor</h2>
          <p>Guiding the next generation, One connection at a time.</p>
        </div>
        <Divider className="self-center w-2/5 mb-4" flexItem />
        <div
          onScroll={(e) => e.target.addEventListener(() => true)}
          className="px-4 py-5 bg-neutral-100 justify-evenly flex overflow-x-scroll overscroll-x-contain gap-4 "
        >
          {loader ? (
            <CircularProgress color="success" />
          ) : (
            mentors
              .map((mentor) => (
                <ProfileCard key={mentor.$id} user={mentor} userId={userid} />
              ))
              .slice(0, 5)
          )}
        </div>
        <Button
          onClick={() => navigate(`mentors?`)}
          className=" mt-4 capitalize w-fit self-center hover:bg-greenColor hover:text-white font-semibold bg-greenlightColor text-greenColor "
        >
          Browse all Mentor
        </Button>
      </div>

      {/* <div className="right-14 max-w-[500px] bottom-20 sticky inline-block float-right p-2 rounded-lg bg-greenBgColor">
        <p>
          <b></b>
          1. <b>Visit the Dashboard: </b> Navigate to the <b>Dashboard </b>page
          of the application. <br />
          2. Access Profile Settings: Click on "Edit Profile" in your account
          settings. <br />
          3. Edit Your Profile: Go to the mentorship section of your profile.{" "}
          <br />
          4. Select Mentorship Option: Choose "Yes" to indicate your interest in
          becoming a mentor. <br />
          5. Fill Out Required Information: Complete the fields for your mentor
          bio, skills, availability, and contact information. <br />
          6. Review Your Information: Double-check all entered information for
          accuracy. <br />
          7. Save Changes: Click the "Save" button to update your profile and
          register as a mentor. <br />
          8. Confirmation: Look for a confirmation message indicating your
          successful registration as a mentor. <br />
          9. Start Mentoring: Begin connecting with mentees and scheduling
          mentoring sessions.
        </p>
      </div> */}
      <Fab
        variant="extended"
        className="text-greenColor bg-green-50 hover:bg-white right-3 bottom-8 sticky flex gap-2 justify-self-end items-center p-4 font-semibold capitalize text-base group "
      >
        <Diversity2Icon className="group-hover:rotate-180 transition-transform ease-in-out duration-500" />
        <span className=" "> Join as Mentor</span>
      </Fab>
    </>
  );
}

export default Mentorship_home;
