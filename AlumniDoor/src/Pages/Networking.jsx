import React, { useState } from "react";
import NetworkNav from "../components/NetworkNav";

import { PostProvider } from "../context/PostContext";
import { Outlet, Route, Routes } from "react-router-dom";

function Networking() {
  const [posts, setPosts] = useState([]);
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
  return (
    <>
      <PostProvider value={{ posts, newPost, updatePost }}>
        <NetworkNav />
        <Outlet />
      </PostProvider>
    </>
  );
}

export default Networking;
