import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ALUMNIDOOR39, ALUMNIDOOR49 } from "../assets/Images";

import { NavLink } from "react-router-dom";

function ProfileCard({ user = {}, userId, donateAmt = "" }) {
  const [img, setImg] = useState();

  useEffect(() => {
    setImg(user.gen === "female" ? "ALUMNIDOOR39" : "ALUMNIDOOR49");
  }, [user.gen]);
  const pfp = { ALUMNIDOOR39, ALUMNIDOOR49 };
  return (
    <Card className="min-w-64 max-w-72 max-h-fit font-sans flex flex-col justify-center text-center p-3 pt-5 items-center rounded-xl">
      <CardMedia className="p-1  outline outline-greenColor rounded-full">
        <Avatar
          className="w-20 h-20 "
          src={pfp[user.profilePictureUrl ?? img]}
        />
      </CardMedia>
      <CardContent>
        <h4>{user.fullName || "Abhishek Sen"}</h4>
        <p>{user.degree || "Computer Science Engineering"}</p>
        <p>Batch {user.graduationYear || "2024"}</p>
      </CardContent>
      <Chip
        className="font-sans font-semibold mb-3 bg-greenlightColor"
        label={user.currentProfession || "System Engineer"}
      />
      {!donateAmt ? (
        <NavLink
          to={user ? `/network/${userId}/messages/${user.$id}/` : null}
          state={{
            senderName: user.fullName,
            senderUserType: user.userType,
            senderIsMentor: user.mentor,
          }}
        >
          <Button // Message
            className="bg-greenColor capitalize font-sans my-1"
            variant="contained"
          >
            Message
          </Button>
        </NavLink>
      ) : null}
      <Divider className="mt-4 mb-2" flexItem />

      {donateAmt ? (
        <CardContent // Donated Amount
          className="p-1 py-3 self-center w-[95%] flex flex-wrap justify-between "
        >
          <span className="font-bold">Amount Donated :</span>
          <span className="font-bold ">₹{donateAmt}</span>
        </CardContent>
      ) : (
        <CardContent // Skills
          className="self-start flex flex-wrap gap-2"
        >
          <span className="font-semibold">Skills :</span>
          <span className="outline outline-neutral-50 p-1 rounded-md mx-1">
            Leadership
          </span>
          <span className="outline outline-neutral-50 p-1 rounded-md mx-1">
            UI/UX Designer
          </span>
          <span className="outline outline-neutral-50 p-1 rounded-md mx-1">
            Figma
          </span>
        </CardContent>
      )}
    </Card>
  );
}

export default ProfileCard;
