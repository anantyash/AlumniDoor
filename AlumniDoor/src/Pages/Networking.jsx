import React, { useState } from "react";
import NetworkNav from "../components/NetworkNav";
import Network_Home from "../components/Network_Home";
import { PostProvider } from "../context/PostContext";

function Networking() {
  const [posts, setPosts] = useState([]);
  const newPost = (post) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      { id: Date.now() , ...post },
    ]);
  };
  return (
    <>
      <PostProvider value={{ posts, newPost }}>
        <NetworkNav />

        <Network_Home />
      </PostProvider>
    </>
  );
}

export default Networking;
