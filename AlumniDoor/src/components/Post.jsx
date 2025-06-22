import { Avatar, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import {
  FavoriteBorderIcon,
  FavoriteIcon,
  ModeCommentOutlinedIcon,
  ShareIcon,
  WorkspacePremiumIcon,
} from "../assets/iconIndex";
import { ALUMNIDOOR39, ALUMNIDOOR49 } from "../assets/Images";

function Post({ post = {} }, ref) {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  // setLikeCount(post.like);

  const pfp = { ALUMNIDOOR39, ALUMNIDOOR49 };
  return (
    <div className="w-full rounded-lg flex flex-col" ref={ref}>
      <div className="flex gap-4 items-center py-3 px-5 rounded-t-lg">
        <Avatar className="text-sm" src={pfp[post.imgurl]} />
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
        {/* {post.id} */}
      </div>
      <Divider variant="middle" />
      <div className="flex flex-row gap-2 justify-between items-center py-2 px-5 rounded-b-lg">
        <IconButton onClick={() => setLike(!like)}>
          {like === false ? (
            <FavoriteBorderIcon className=" text-greenColor " />
          ) : (
            <FavoriteIcon className={"text-red-500 animate-pinge "} />
          )}
        </IconButton>

        <IconButton>
          <ModeCommentOutlinedIcon className=" text-greenColor" />
        </IconButton>
        <IconButton className=" flex self-end">
          <ShareIcon className=" text-greenColor" />
        </IconButton>
      </div>
    </div>
  );
}

export default React.forwardRef(Post);
