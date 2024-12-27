 
import React, { useEffect, useState } from "react";
import { Avatar, Divider, IconButton, TextField } from "@mui/material";
import avatarimg from "../assets/avatarimg.png";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SendIcon from "@mui/icons-material/Send";
import { usePost } from "../context/PostContext"; // Adjust the import path as necessary

function Network_Home() {
  const { posts, newPost } = usePost();
  const [postContent, setPostContent] = useState("");

  const handlePostSubmit = () => {
    if (postContent.trim()) {
      newPost({ content: postContent, imgurl: "" });
      setPostContent(""); // Clear the input after posting
    }
  };

  return (
    <div className="flex justify-center pt-2 bg-gray-200">
      <div className="h-auto w-4/5 md:w-1/2 flex flex-col items-center justify-center p-5 gap-2 rounded-lg">
        <div className="bg-green-50 flex flex-col gap-1 p-4 justify-center w-full md:w-full md:px-8 md:py-6 rounded-xl shadow-lg">
          <div className="flex gap-3">
            <IconButton>
              <Avatar src={avatarimg} />
            </IconButton>

            <TextField
              id="textInput"
              variant="standard"
              placeholder="Start a post, write here..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="font-sans text-sm border-green-700 justify-center px-2 w-full"
            />

           
            <IconButton
              className=" rounded-full p-3 w-fit h-fit self-center hover:bg-green-100 text-green-700"
              size="small"
              onClick={handlePostSubmit}
            >
              <SendIcon />
            </IconButton>
          </div>
          <Divider className="mb-2"/>
          <div className="flex ml-8">
          <IconButton
              className=" outline-dashed outline-1 rounded-md px-4"
              size="small"
            >
              <AddPhotoAlternateOutlinedIcon />
              <p className="text-base pl-2">Images</p>
            </IconButton>
          </div>
        
        </div>

        <ul className="bg-green-50 flex flex-col gap-3 p-4 justify-center w-full md:px-8 md:py-6 rounded-xl shadow-lg list-none font-sans">
          {posts.length > 0 ? (
            posts.map((post) => (
              <li
                className="bg-green-50 flex gap-3 p-4 justify-center w-auto md:w-fit md:px-8 md:py-6 rounded-xl shadow-lg"
                key={post.id}
              >
                {post.content}
              </li>
            ))
          ) : (
            <li>No posts available.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Network_Home;
