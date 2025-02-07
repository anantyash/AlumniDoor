import React, { useState } from "react";
import NetworkNav from "../../components/NetworkNav";

import { PostProvider } from "../../context/PostContext";
import { Outlet, useNavigation } from "react-router-dom";
import { MsgProvider } from "../../context/MessageContext";
import { CircularProgress } from "@mui/material";

function Networking_Layout() {
  const [posts, setPosts] = useState([]);
  const [msgs, setMsgs] = useState([]);
  // const navigation = useNavigation();
  // const isNavigating = Boolean(navigation.location);
  // console.log("IsNavigating: ", isNavigating);

  const newPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, { ...post }]);
  };

  const updatePost = (postid, postData) => {
    setPosts((prevPosts) =>
      prevPosts.map((prevpost) =>
        prevpost.id === postid ? { ...prevpost, ...postData } : prevpost
      )
    );
  };

  const newMsg = (msg) => {
    setMsgs((prevMsg) => [...prevMsg, { ...msg }]);
  };

  return (
    <>
      <PostProvider value={{ posts, newPost, updatePost }}>
        <MsgProvider value={{ msgs, newMsg }}>
          <NetworkNav />
          {/* {isNavigating && <CircularProgress />} */}
          <Outlet />
        </MsgProvider>
      </PostProvider>
    </>
  );
}

export default Networking_Layout;
