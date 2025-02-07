import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Chip,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  LinearProgress,
  Link,
  TextField,
} from "@mui/material";

import { avatarimg } from "../../assets/Images";

import {
  AddPhotoAlternateOutlinedIcon,
  BadgeIcon,
  FavoriteBorderIcon,
  FavoriteIcon,
  LogoutIcon,
  ModeCommentOutlinedIcon,
  SchoolIcon,
  SendIcon,
  ShareIcon,
  StarsIcon,
  WorkspacePremiumIcon,
} from "../../assets/iconIndex";

import { usePost } from "../../context/PostContext";
import { useUser } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import ProfileCard from "../../components/UserCard";
import { Post } from "../../components";

function Network_Home() {
  const navigate = useNavigate();
  const { userid } = useParams();
  const { users } = useUser();
  const [user, setUser] = useState(null);
  const { posts, newPost, updatePost } = usePost();
  const [postContent, setPostContent] = useState("");
  const [loader, setLoader] = useState(Boolean);
  const [postLoader, setPostLoader] = useState(false);

  const [value, setValue] = useState(0);
  const charLimit = 250;

  useEffect(() => {
    setLoader(true);
    fetchUser();
  });

  const fetchUser = () => {
    setUser(() => users.find((user) => user.id === userid));
    setLoader(false);
    // return user;
  };

  if (!user) {
    return (
      <div className="flex flex-col h-52 bg-neutral-100 gap-6 p-5 justify-center items-center">
        <h3 className="text-3xl">
          <span className="text-red-600">Error 404: </span>User not found
        </h3>
        <Button
          className=" hover:bg-transparent font-sans font-semibold underline capitalize"
          variant="text"
          onClick={() => navigate("/signup")}
        >
          Click here to Login again
        </Button>

        {/* <Link className=" text-blue-600">
          Click here to Login again
        </Link> */}
      </div>
    );
  }

  const handlePostSubmit = () => {
    setPostLoader(true);
    if (postContent.trim()) {
      const postid = Date.now();
      newPost({
        id: postid,
        content: postContent,
        imgurl: "",
        userName: user.fullName,
        userType: user.userType,
        like: 0,
        liked: false,
      });
      setPostContent(""); // Clear the input after posting
      setValue(0);
      setPostLoader(false);
    }
  };

  return (
    <>
      {loader ? (
        <div className="w-full h-[70vh] flex justify-center items-center bg-neutral-100 ">
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className="md:max-w-screen-xl py-0 md:py-4  md:px-20 justify-around md:justify-center bg-neutral-100 flex  md:gap-16">
          <div //Left Side Bar
            className=" hidden md:flex py-6 px-6 gap-5 self-start bg-white p-4 rounded-lg shadow-lg "
          >
            <ProfileCard user={user} />
          </div>

          {/* For Main Content */}
          <div
            className=" w-11/12 md:w-2/4  drop-shadow-lg rounded-lg  flex flex-col gap-4"
            // className="h-auto w-4/5 md:w-1/2 flex flex-col items-center justify-center p-5 gap-2 rounded-lg"
          >
            {/* Post Inputs */}
            <div className="bg-white flex flex-col gap-1 justify-center w-full py-6 rounded-lg shadow-lg">
              <div className="flex gap-3 pl-3">
                <IconButton>
                  <Avatar src={avatarimg} />
                </IconButton>

                <TextField
                  id="textInput"
                  variant="standard"
                  placeholder="Share Your Thoughts..."
                  multiline
                  value={postContent}
                  onChange={(e) => {
                    if (e.target.value.length <= charLimit) {
                      setValue(e.target.value.length);
                      setPostContent(e.target.value);
                    } else {
                      null;
                    }
                  }}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          {value}/{charLimit}
                        </InputAdornment>
                      ),
                    },
                  }}
                  className="font-sans text-sm border-green-700 justify-center px-2 w-full"
                />

                <div className="flex w-fit h-fit p-2 gap-1 justify-around  self-center">
                  <IconButton
                    className=" rounded-full p-2 w-fit h-fit self-center hover:bg-green-100 text-green-700"
                    size="small"
                  >
                    <AddPhotoAlternateOutlinedIcon />
                  </IconButton>

                  <Divider className=" my-1" orientation="vertical" flexItem />

                  <IconButton
                    className=" rounded-full p-2 w-fit h-fit self-center hover:bg-green-100 text-green-700"
                    size="small"
                    onClick={handlePostSubmit}
                  >
                    <SendIcon />
                  </IconButton>
                </div>
              </div>
            </div>

            {postLoader ? (
              <div className="w-full py-3 flex flex-col items-center gap-4 bg-white rounded-lg">
                <span className="font-sans font-semibold self-start ml-8">
                  Uploading Your Post
                </span>
                <LinearProgress className="w-[90%]" color="success" />
              </div>
            ) : null}

            {/* For Posts */}
            <ul className=" flex flex-col-reverse gap-5 justify-center w-full list-none font-sans">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <li
                    className="bg-white   flex gap-3 self-center w-full rounded-md shadow-lg transition-all duration-700 ease-in-out"
                    key={post.id}
                  >
                    <Post post={post} />
                  </li>
                ))
              ) : (
                <li className="bg-white rounded-lg p-5 flex items-center justify-center flex-wrap">
                  No posts available.
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Network_Home;
