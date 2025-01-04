import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
} from "@mui/material";
import { useUser } from "../context/UserContext";
import {
  ALUMNIDOOR14,
  ALUMNIDOOR44,
  ALUMNIDOOR59,
  ALUMNIDOOR8,
  avatarimg,
} from "../assets";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  BadgeIcon,
  Diversity2Icon,
  FaDonate,
  LogoutIcon,
  RiRobot2Fill,
  SiCodementor,
  WorkspacePremiumIcon,
} from "../assets/iconIndex";

function Door() {
  const { users } = useUser();
  const navigate = useNavigate();
  console.log(users);
  return (
    <>
      <Divider className="md:top-24 sticky z-40" />
      <div className=" md:max-w-screen-xl bg-neutral-100 flex px-4 gap-8 ">
        <div //Left Side Bar
          className="h-dvh w-1/5 hidden md:flex flex-col py-6 px-6 gap-5 "
        >
          <div //Profile Card
            className="flex flex-col justify-center bg-white p-4 rounded-lg shadow-lg"
          >
            <div className="text-center items-center flex flex-col mb-3">
              <Avatar className="w-20 h-auto mb-2" src={avatarimg} />
              <span className="font-semibold font-sans text-xl ">
                Anant Yash
              </span>

              <span className="  font-sans flex items-center text-sm ">
                Computer Science and Engineering
              </span>

              <p className=" font-sans flex items-center ">
                {" "}
                <span className="text-blue-700 px-1">
                  <BadgeIcon className="text-lg" />
                </span>
                Frontend Developer
              </p>
            </div>
            <Chip
              className="bg-orange-100 w-fit self-center font-sans font-semibold"
              label="Mentor"
              icon={<WorkspacePremiumIcon className="text-orange-500" />}
            />

            <Divider className="mt-10 mb-7 font-sans cursor-default" flexItem>
              Quick Links
            </Divider>
            <div //Quick Links
              className="flex flex-col gap-5 
            [&>*]:no-underline   [&>*]:rounded-lg   [&>*]:text-black    [&>*]:flex       
            [&>*]:font-sans    [&>*]:font-semibold     [&>*]:gap-3        [&>*]:px-3
            hover:[&>*]:transition-all hover:[&>*]:duration-300 hover:[&>*]:ease-in-out 
            hover:[&>*]:text-greenTextColor 
            "
            >
              <Link to={'/network'} >
                <Diversity2Icon className="text-greenColor" /> Networking Hub
              </Link>
              <Link to={'/mentorship-program'} >
                <SiCodementor className="text-greenColor text-2xl self-center " />{" "}
                Mentorship Program
              </Link>
              <Link to={'/donation-page'} >
                <FaDonate className="text-greenColor text-xl self-center ml-1  " />{" "}
                Donation Portal
              </Link>
              <Link to={'/support'} >
                {/* <SupportAgentIcon className="text-greenColor" />  */}
                <RiRobot2Fill className="text-greenColor text-xl self-center ml-1  " />
                Support & Feedback
              </Link>
            </div>
            <Divider className="mt-10 mb-5" flexItem variant="middle" />
            <Link to={'/'} className=" no-underline justify-self-center px-4 mb-2 text-black hover:text-greenTextColor font-semibold font-sans flex items-center gap-2 ">
              <LogoutIcon className="text-greenColor" /> Log Out
            </Link>
          </div>
        </div>
      
        <div //main content
          className=" w-full md:w-3/5 px-5 md:px-16 py-4 drop-shadow-2xl rounded-lg my-6 flex flex-col gap-4 bg-white"
        >
          <div //Header Section
            className=" w-full md:ml-5 font-sans text-left relative top-4 p-6 rounded-xl "
          >
            <h3 className="  font-semibold text-xl">
              {" "}
              <span className="text-3xl flex flex-col font-extrabold font-serif pr-2 text-greenColor mb-1 ">Welcome to Door:</span>
              Your Gateway to Connection and Growth.
            </h3>
          </div>
            <Divider className="my-1 mx-10" variant="middle" flexItem />
            {/* <p className=" text-center text-lg ">
              Empowering you to engage, support, and thrive with the Alumni
              Network
            </p> */}

          <div //Cards Section
            className="w-fit md:w-fit h-fit mt-4 p-8 pt-0 flex flex-wrap rounded-xl gap-16 justify-around  hover:[&>*]:drop-shadow-2xl  "
          >
            <Card //Networking Hub
              className="md:w-5/12 bg-greenColor text-white font-sans"
            >
              <CardMedia component="img" image={ALUMNIDOOR59} />
              <CardContent className=" cursor-default ">
                <h3>Networking Hub</h3>
                <p>Expand Your Professional Network</p>
              </CardContent>
              <CardActions>
                <Button
                  className="text-greenlightColor drop-shadow-2xl font-semibold hover:text-yellow-300"
                  endIcon={<KeyboardArrowRightIcon />}
                  onClick={() => {
                    navigate("/network");
                  }}
                >
                  Connect
                </Button>
              </CardActions>
            </Card>
            <Card //Mentorship Program
              className="md:w-5/12 bg-greenColor text-white font-sans"
            >
              <CardMedia component="img" image={ALUMNIDOOR8} />
              <CardContent className="cursor-default">
                <h3>Mentorship Program</h3>
                <p>Find a Mentor or Become One</p>
              </CardContent>
              <CardActions>
                <Button
                  className="text-greenlightColor drop-shadow-2xl font-semibold hover:text-yellow-300"
                  endIcon={<KeyboardArrowRightIcon className="font-semibold" />}
                  onClick={() => {
                    navigate("/mentorship-program");
                  }}
                >
                  Join Now
                </Button>
              </CardActions>
            </Card>
            <Card //Donation Portal
              className="md:w-5/12 bg-greenColor text-white font-sans"
            >
              <CardMedia component="img" image={ALUMNIDOOR14} />
              <CardContent className="   ">
                <h3>Donation Portal</h3>
                <p>Giving Back, Shaping Futures.</p>
              </CardContent>
              <CardActions>
                <Button
                  className="text-greenlightColor drop-shadow-2xl font-semibold hover:text-yellow-300"
                  endIcon={<KeyboardArrowRightIcon />}
                  onClick={() => {
                    navigate("/donation-page");
                  }}
                >
                  Donate Now
                </Button>
              </CardActions>
            </Card>
            <Card //Support & Feedback
              className="md:w-5/12 bg-greenColor text-white font-sans"
            >
              <CardMedia component="img" image={ALUMNIDOOR44} />
              <CardContent className="   ">
                <h3>Support & Feedback</h3>
                <p>Need Help? We're Here for You</p>
              </CardContent>
              <CardActions>
                <Button
                  className="text-greenlightColor drop-shadow-2xl font-semibold hover:text-yellow-300"
                  endIcon={<KeyboardArrowRightIcon />}
                  onClick={() => {
                    navigate("/support");
                  }}
                >
                  Get Help
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>

        {/* Main Content:
1. Centralized Dashboard Layout:
Clean, modern design with a minimalist approach for easy navigation and clear calls to action.
Background: Soft, welcoming colors with professional visuals (e.g., abstract patterns or a community-focused image).
 */}
        {/* {users.length > 0 ? users.map((user) => user.fullName) : "null"} */}
      </div>
    </>
  );
}

export default Door;
