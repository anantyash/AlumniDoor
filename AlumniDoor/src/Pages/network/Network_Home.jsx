import React, { useState } from "react";
import {
  Avatar,
  Chip,
  Divider,
  IconButton,
  Link,
  TextField,
} from "@mui/material";

import { avatarimg } from "../../assets";

import {
  AddPhotoAlternateOutlinedIcon,
  BadgeIcon,
  FavoriteBorderIcon,
  FavoriteIcon,
  LogoutIcon,
  ModeCommentOutlinedIcon,
  SendIcon,
  ShareIcon,
  WorkspacePremiumIcon,
} from "../../assets/iconIndex";

import { usePost } from "../../context/PostContext";

function Network_Home() {
  const { posts, newPost, updatePost } = usePost();
  const [postContent, setPostContent] = useState("");
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // let user = users.find((user) => user.id === parseInt(userid, 10));

  const handlePostSubmit = () => {
    if (postContent.trim()) {
      const postid = Date.now();
      newPost({
        id: postid,
        content: postContent,
        imgurl: "",
        userName: "Prince Kumar",
        userType: "Mentor",
        like: 0,
        liked: false,
      });
      setPostContent(""); // Clear the input after posting
    }
  };

  // const handleLike = (post) => {
  //   const newLikeCount = post.like + (post.liked ? -1 : 1);
  //   updatePost(postid, {
  //     like: likeCount,
  //   });

  //   setLike(!like);
  // };
  // const initialValues = {};

  return (
    <div className="md:max-w-screen-xl py-0 md:py-4  md:px-20 justify-around md:justify-normal bg-neutral-100 flex  md:gap-16">
      <div //Left Side Bar
        className="h-dvh w-1/4 hidden md:flex py-6 px-6 gap-5 self-start "
      >
        <div //Profile Card
          className="flex flex-col self-start justify-center w-full bg-white p-4 rounded-lg shadow-lg"
        >
          <div className="text-center items-center flex flex-col mb-3  ">
            <Avatar className="w-20 h-auto mb-2" src={avatarimg} />
            <span className="font-semibold font-sans text-xl ">
              Prince Kumar
              {/* {user.fullName} */}
            </span>

            <span className="  font-sans flex text-sm ">
              Computer Science Engineering,
              {/* {user.degree} */}
            </span>
            <span className="  font-sans flex text-sm ">
              Batch 2024
              {/* {user.degree} */}
            </span>

            <p className=" font-sans flex items-center ">
              {" "}
              <span className="text-blue-700 px-1">
                <BadgeIcon className="text-lg pt-1" />
              </span>
              Backend Developer
              {/* {user.userType === "Alumni"
                  ? user.currentProfession
                  : user.userType} */}
            </p>
          </div>
          <Chip
            className="bg-orange-100 cursor-default w-fit self-center font-sans font-semibold"
            label="Mentor"
            icon={<WorkspacePremiumIcon className="text-orange-500" />}
          />
          {/* {user.mentor === "Yes" && (
              <Chip
                className="bg-orange-100 cursor-default w-fit self-center font-sans font-semibold"
                label="Mentor"
                icon={<WorkspacePremiumIcon className="text-orange-500" />}
              />
            )}
            {user.mentor === "No" && user.userType === "Alumni" && (
              <Chip
                className="bg-slate-200 cursor-default w-fit self-center font-sans font-semibold"
                label="Alumni"
                icon={<StarsIcon className="text-slate-500" />}
              />
            )}
            {user.userType === "Student" && (
              <Chip
                className="bg-yellow-100 cursor-default w-fit self-center font-sans font-semibold"
                label="Student"
                icon={<SchoolIcon className="text-yellow-900" />}
              />
            )} */}

          <Divider className="mt-10 mb-5" flexItem variant="middle" />
          <Link
            to={"/"}
            className=" no-underline justify-self-center px-4 mb-2 text-black hover:text-greenTextColor font-semibold font-sans flex items-center gap-2 "
          >
            <LogoutIcon className="text-greenColor" /> Log Out
          </Link>
        </div>
      </div>

      {/* For Main Content */}
      <div
        className=" w-11/12 md:w-2/4 py-4 drop-shadow-lg rounded-lg my-3 flex flex-col gap-4"
        // className="h-auto w-4/5 md:w-1/2 flex flex-col items-center justify-center p-5 gap-2 rounded-lg"
      >
        <div className="bg-white flex flex-col gap-1 justify-center w-full py-6 rounded-lg shadow-lg">
          <div className="flex gap-3 pl-3">
            <IconButton>
              <Avatar src={avatarimg} />
            </IconButton>

            <TextField
              id="textInput"
              variant="standard"
              placeholder="Express Yourself with Ease..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
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

        {/* For Posts */}
        <ul className=" flex flex-col-reverse gap-5 justify-center w-full list-none font-sans">
          {posts.length > 0 ? (
            posts.map((post) => (
              <li
                className="bg-white   flex gap-3 self-center w-full rounded-md shadow-lg"
                key={post.id}
              >
                <div className="w-full rounded-lg flex flex-col">
                  <div className="flex gap-4 items-center py-3 px-5 rounded-t-lg">
                    <Avatar className="text-sm" src={avatarimg} />
                    <div className=" flex flex-col ">
                      <span className="font-semibold font-sans text-md ">
                        {/* Prince Kumar */}
                        {post.userName}
                      </span>
                      <span className=" font-sans text-sm flex items-center">
                        {/* Alumni */}
                        {post.userType}
                        {post.userType === "Mentor" ? (
                          <WorkspacePremiumIcon className="text-orange-500 text-sm px-1 pt-0.5" />
                        ) : null}
                      </span>
                    </div>
                  </div>
                  <Divider variant="middle" />
                  <div className="p-5 flex min-h-20 items-center flex-wrap">
                    {post.content}
                    {post.id}
                  </div>
                  <Divider variant="middle" />
                  <div className="flex flex-row gap-2 justify-between items-center py-2 px-5 rounded-b-lg">
                    {like == false ? (
                      <IconButton
                      // onClick={handleLike}
                      // onClick={() => {
                      //   setLike(true);
                      //   post.like = post.like + 1;
                      // }}
                      >
                        <FavoriteBorderIcon className=" text-greenColor " />
                      </IconButton>
                    ) : (
                      <IconButton
                      // onClick={handleLike(post.id)}
                      // onClick={() => {
                      //   setLike(false);
                      //   post.like = post.like - 1;
                      // }}
                      >
                        <FavoriteIcon
                          className={"text-red-500 animate-pinge "}
                        />{" "}
                        <span className="text-sm px-1">{post.like}</span>
                      </IconButton>
                    )}

                    <IconButton>
                      <ModeCommentOutlinedIcon className=" text-greenColor" />
                    </IconButton>
                    <IconButton className=" flex self-end">
                      <ShareIcon className=" text-greenColor" />
                    </IconButton>
                  </div>
                </div>
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
  );
}

export default Network_Home;
