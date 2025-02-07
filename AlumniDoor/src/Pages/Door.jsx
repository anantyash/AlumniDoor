import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
} from "@mui/material";

import {
  ALUMNIDOOR14,
  ALUMNIDOOR44,
  ALUMNIDOOR59,
  ALUMNIDOOR8,
  avatarimg,
} from "../assets/Images";

import {
  BadgeIcon,
  CloseIcon,
  Diversity2Icon,
  FaDonate,
  LogoutIcon,
  KeyboardArrowRightIcon,
  ModeEditOutlineRoundedIcon,
  RiRobot2Fill,
  SiCodementor,
  WorkspacePremiumIcon,
  SchoolIcon,
  // CardMembershipIcon,
  StarsIcon,
} from "../assets/iconIndex";

import { LogOut, UserCard } from "../components";

function Door() {
  const navigate = useNavigate();

  const { users, updateUser } = useUser();
  const { userid } = useParams();

  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchUserData = () => {
    setUser(users.find((user) => user.id === userid));
    setLoader(false);
  };

  useEffect(() => {
    setLoader(true);
    fetchUserData();
    // user = users.find((user) => user.id === userid);
    // console.log(user);
  }, [updateUser]);

  return (
    <>
      <Divider className="md:top-24 sticky z-40" />
      {loader ? (
        <div className=" md:h-[400px] bg-neutral-100 flex justify-center items-center">
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className=" md:max-w-screen-xl bg-neutral-100 flex px-4 gap-8">
          <div //Left Side Bar
            className="h-dvh w-[25%] max-w-[250px] hidden md:flex flex-col py-6 px-6 gap-5  "
          >
            <div className="flex flex-col  w-full bg-white p-4 rounded-lg shadow-lg">
              <UserCard user={user} edit={true} />
              <Divider className="my-7 font-sans cursor-default" flexItem>
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
                <NavLink to={`/network/${user.id}/home`}>
                  <Diversity2Icon className="text-greenColor" /> Networking Hub
                </NavLink>
                <Link to={`/mentorship-program/${user.id}/`}>
                  <SiCodementor className="text-greenColor text-2xl self-center " />{" "}
                  Mentorship Program
                </Link>
                <Link to={`/donation-portal/${user.id}`}>
                  <FaDonate className="text-greenColor text-xl self-center ml-1  " />{" "}
                  Donation Portal
                </Link>
                <Link to={`/support/${user.id}`}>
                  {/* <SupportAgentIcon className="text-greenColor" />  */}
                  <RiRobot2Fill className="text-greenColor text-xl self-center ml-1  " />
                  Support & Feedback
                </Link>
              </div>
              <Divider className="mt-10 mb-5" flexItem variant="middle" />
              <LogOut className="self-start ml-4 mb-2 hover:text-greenTextColor hover:bg-transparent " />
              {/*  */}
            </div>
          </div>

          <div //main content
            className=" w-full lg:w-3/5 px-5 lg:px-16 py-4 drop-shadow-2xl rounded-lg my-6 flex flex-col gap-4 bg-white"
          >
            <div //Header Section
              className=" w-full md:ml-5 font-sans text-left relative top-4 p-6 rounded-xl "
            >
              <h3 className="  font-semibold text-xl">
                {" "}
                <span className="text-3xl flex flex-col font-extrabold font-serif pr-2 text-greenColor mb-1 ">
                  Welcome to Door:
                </span>
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
                className="lg:w-5/12 bg-greenColor text-white font-sans"
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
                      navigate(`/network/${userid}/home`);
                    }}
                  >
                    Connect
                  </Button>
                </CardActions>
              </Card>
              <Card //Mentorship Program
                className="lg:w-5/12 bg-greenColor text-white font-sans"
              >
                <CardMedia component="img" image={ALUMNIDOOR8} />
                <CardContent className="cursor-default">
                  <h3>Mentorship Program</h3>
                  <p>Find a Mentor or Become One</p>
                </CardContent>
                <CardActions>
                  <Button
                    className="text-greenlightColor drop-shadow-2xl font-semibold hover:text-yellow-300"
                    endIcon={
                      <KeyboardArrowRightIcon className="font-semibold" />
                    }
                    onClick={() => {
                      navigate(`/mentorship-program/${user.id}/`);
                    }}
                  >
                    Join Now
                  </Button>
                </CardActions>
              </Card>
              <Card //Donation Portal
                className="lg:w-5/12 bg-greenColor text-white font-sans"
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
                      navigate(`/donation-portal/${user.id}`);
                    }}
                  >
                    Donate Now
                  </Button>
                </CardActions>
              </Card>
              <Card //Support & Feedback
                className="lg:w-5/12 bg-greenColor text-white font-sans"
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
        </div>
      )}
    </>
  );
}

export default Door;
