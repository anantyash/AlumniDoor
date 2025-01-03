import React from "react";

// import successstoryimg from "../assets/successstoryimg.png";
// import metorshipimg from "../assets/mentorshipimg.png";
// import jobportalimg from "../assets/jobportalimg.png";
// import feedbackimg from "../assets/feedbackimg.png";
// import eventimg from "../assets/eventimg.png";
// import networkimg from "../assets/networkimg.png";
import successstoryimg from "../assets/AlumniPics/ALUMNIDOOR (34).png";
import metorshipimg from "../assets/AlumniPics/ALUMNIDOOR (7).png";
import networkimg from "../assets/AlumniPics/ALUMNIDOOR (27).png";
import feedbackimg from "../assets/AlumniPics/ALUMNIDOOR (39).png";
import donateimg from "../assets/AlumniPics/ALUMNIDOOR (17).png";
import queimg from "../assets/AlumniPics/ALUMNIDOOR (50).png";

import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function QuickLinks() {
  return (
    <div //Section Container
      className=" w-fit flex flex-col py-5 items-center gap-10"
    >
      <hr className="w-3/4 md:w-4/5 self-center" />
      <div // Links Container 1 Success Stories
        className="flex w-3/4 flex-col-reverse md:flex-row justify-center gap-5 md:gap-14 items-center border-2 border-greenColor border-solid rounded-lg p-2 md:pt-3"
      >
        <div // Link Part
          className="text-center  flex flex-col justify-center"
        >
          <h1> Success Stories</h1>
          <p className="p-2">
            Discover inspiring achievements of our alumni and get motivated by
            their journey.
          </p>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            className="text-greenColor hover:bg-greenlightColor w-fit self-center"
          >
            Explore Now
          </Button>
        </div>
        <div // Image Part
          className="w-full md:w-1/4 "
        >
          <img
            src={successstoryimg}
            alt="Image"
            className="w-full  rounded-md"
          />
        </div>
      </div>
      <div // Links Container 2 Mentorship Program
        className="flex w-3/4 md:flex-row-reverse justify-center md:gap-14 items-center border-2 border-greenColor border-solid rounded-lg md:pt-3 flex-col-reverse p-2 gap-5 "
      >
        <div // Link Part
          className="text-center  flex flex-col justify-center"
        >
          <h1> Mentorship Program</h1>
          <p className="p-2">
            Connect with alumni mentors for career guidance and real-world
            insights.
          </p>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            className="text-greenColor hover:bg-greenlightColor w-fit self-center"
          >
            Find a Mentor
          </Button>
        </div>
        <div // Image Part
          className="md:w-1/4 w-full"
        >
          <img src={metorshipimg} alt="Image" className="w-full  rounded-md" />
        </div>
      </div>
      {/* Job Poartal link 
      <div // Links Container 3
        className="flex w-3/4 md:flex-row justify-center md:gap-14 items-center border-2 border-green-400 border-solid rounded-lg md:pt-1 flex-col-reverse p-2 gap-5"
      >
        <div // Link Part
          className="text-center  flex flex-col justify-center"
        >
          <h1> Job Board</h1>
          <p className="p-2">
            Explore job opportunities posted by alumni or share openings with
            the community.
          </p>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            className="text-green-600 hover:bg-green-200 w-fit self-center"
          >
            View Jobs
          </Button>
        </div>
        <div // Image Part
          className="md:w-1/4 w-full"
        >
          <img src={jobportalimg} alt="Image" className="w-full  rounded-md" />
        </div>
      </div> */}
      {/* Events section
      <div // Links Container 4
        className="flex w-3/4  md:flex-row-reverse justify-center md:gap-14 items-center border-2 border-green-400 border-solid rounded-lg md:pt-1 flex-col-reverse p-2 gap-5"
      >
        <div // Link Part
          className="text-center  flex flex-col justify-center"
        >
          <h1> Events & Reunions</h1>
          <p className="p-2">
            Stay updated on upcoming alumni meetups, webinars, and workshops.
          </p>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            className="text-green-600 hover:bg-green-200 w-fit self-center"
          >
            Check Events
          </Button>
        </div>
        <div // Image Part
          className="md:w-1/4 w-full"
        >
          <img src={eventimg} alt="Image" className="w-full  rounded-md" />
        </div>
      </div> */}
      <div // Links Container 5 Networking Hub
        className="flex w-3/4  justify-center md:flex-row md:gap-14 items-center border-2 border-greenColor border-solid rounded-lg md:pt-3 flex-col-reverse p-2 gap-5"
      >
        <div // Link Part
          className="text-center  flex flex-col justify-center"
        >
          <h1> Networking Hub</h1>
          <p className="p-2">
            Join discussions, share ideas, and connect with peers and
            professionals.
          </p>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            className="text-greenColor hover:bg-greenlightColor w-fit self-center"
          >
            Start Networking
          </Button>
        </div>
        <div // Image Part
          className="md:w-1/4 w-full"
        >
          <img src={networkimg} alt="Image" className="w-full  rounded-md" />
        </div>
      </div>
      <div // Links Container 6 Feedback & Surveys
        className="flex w-3/4 md:flex-row-reverse justify-center md:gap-14 items-center border-2 border-greenColor border-solid rounded-lg md:pt-3 flex-col-reverse p-2 gap-5"
      >
        <div // Link Part
          className="text-center  flex flex-col justify-center"
        >
          <h1> Feedback & Surveys</h1>
          <p className="p-2">
            Share your thoughts to help us improve and grow as a community.
          </p>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            className="text-greenColor hover:bg-greenlightColor w-fit self-center"
          >
            Give Feedback
          </Button>
        </div>
        <div // Image Part
          className="md:w-1/4 w-full"
        >
          <img src={feedbackimg} alt="Image" className="w-full  rounded-md" />
        </div>
      </div>
      <div // Links Container 7 Donate & Support
        className="flex w-3/4 md:flex-row justify-center md:gap-14 items-center border-2 border-greenColor border-solid rounded-lg md:pt-3 flex-col-reverse p-2 gap-5"
      >
        <div // Link Part
          className="text-center  flex flex-col justify-center"
        >
          <h1> Donate & Support</h1>
          <p className="p-2 font-sans">
            Contribute to initiatives that create a better future for students.
          </p>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            className="text-greenColor hover:bg-greenlightColor w-fit self-center"
          >
            Make a Donation
          </Button>
        </div>
        <div // Image Part
          className="md:w-1/4 w-full"
        >
          <img src={donateimg} alt="Image" className="w-full  rounded-md" />
        </div>
      </div>
      <div // Links Container 8 QnA
        className="flex w-3/4 md:flex-row-reverse justify-center md:gap-14 items-center border-2 border-greenColor border-solid rounded-lg  md:p-3 flex-col-reverse p-2 gap-5"
      >
        <div // Link Part
          className="text-center  flex flex-col justify-center "
        >
          <h1> Who is <span className="text-greenColor">"Alumni-Door"</span> For?</h1>
          <p className="p-2 font-sans ">
            "Alumni-Door" is for: <br />
            <b>Alumni</b> who want to give back, mentor, and stay connected with
            their alma mater. <br />
            <b>Students</b> seeking guidance, networking opportunities, and
            career growth. <br />
            <b>Institutions</b> aiming to foster lifelong relationships and
            build a vibrant, supportive community.
          </p>
        </div>
        <div // Image Part
          className="md:w-1/4 w-full"
        >
          <img src={queimg} alt="Image" className="w-full  rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
