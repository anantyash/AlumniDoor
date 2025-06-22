import { Avatar, Backdrop, IconButton, InputBase } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ALUMNIDOOR39, ALUMNIDOOR49 } from "../assets/Images";
import { CloseIcon, SendIcon, WorkspacePremiumIcon } from "../assets/iconIndex";
import { useMsg } from "../context/MessageContext";
import { useLocation, useParams } from "react-router-dom";
import { ChatBox, ProfileCard } from "./";
import dbService from "../services/AD_DB/userDB";

function ChattingArea({ className = "", ref }) {
  const { msgs, newMsg } = useMsg();
  const location = useLocation();
  const [msg, setMsg] = useState("");
  const [userData, setUserData] = useState(null);
  const [closeProfile, setCloseProfile] = useState(true);

  const { userid, messageid } = useParams();

  const data = location.state; // reteriving data from state

  const pfp = { ALUMNIDOOR49, ALUMNIDOOR39 };
  const handleSendMsg = () => {
    if (msg.trim()) {
      const msgId = Date.now();
      newMsg({
        id: msgId,
        sendTo: messageid, //msguserid
        sendFrom: userid, //userid
        msg: msg,
      });
      setMsg("");
      // scrollTo(0, 1000);
      // <Link to={"#msgid"} />;
      // console.log(mesg);
    }
  };

  // useEffect(() => {
  //   handleProfile();
  // }, [messageid]);

  const handleProfile = async () => {
    setCloseProfile(true);
    if (messageid) {
      await dbService.getAllUser(userid).then((data) => {
        setUserData(data.find((user) => user.$id === messageid));
      });
    }
    // console.log("userData", userData);
    // const userData = userData.find((user) => user.id === messageid);
  };

  return (
    <div
      ref={ref}
      className={`w-full fixed bg-white rounded-r-xl drop-shadow-xl ${className}`}
    >
      {/* ------------------------------- Header Section ---------------------------------- */}
      <div className=" px-5 py-3 flex items-center bg-greenColor rounded-tr-xl">
        <div
          className=" flex w-full text-white pl-2 gap-4 cursor-pointer"
          onClick={handleProfile}
        >
          <Avatar className="w-14 h-14 " src={pfp[data.senderImg]} />
          <div className=" flex flex-col justify-center font-sans">
            <h3>{data.senderName}</h3>
            <span className="flex items-center text-base gap-1">
              {data.senderUserType}
              {data.senderIsMentor ? (
                <WorkspacePremiumIcon className="text-orange-500 text-base mt-1 rounded-full" />
              ) : null}

              {/* <WorkspacePremiumIcon className="text-orange-500 text-base rounded-full" /> */}
            </span>
          </div>
        </div>
      </div>

      {userData && (
        <Backdrop aria-hidden={false} open={closeProfile} className="z-50">
          <div className="w-fit flex flex-col bg-white z-40 rounded-lg mt-10 drop-shadow-lg">
            <IconButton
              className="w-fit self-end mx-3"
              onClick={() => setCloseProfile(false)}
            >
              <CloseIcon />
            </IconButton>
            <ProfileCard user={userData} />
          </div>
        </Backdrop>
      )}

      {/* -------------------------------- Body Section ----------------------------------- */}

      <div className="w-full h-[248px] flex flex-col justify-end font-sans gap-2 overflow-scroll scrollbar-none ">
        <ChatBox messageid={messageid} />
      </div>

      {/* ------------------------------- Footer Section ---------------------------------- */}
      <div className=" px-5 py-3 rounded-br-xl flex gap-3 self-end bg-greenColor items-center">
        <InputBase
          className="bg-white w-full rounded-full h-12 pl-5 pr-2 text-base"
          placeholder="Type Messages"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMsg();
            }
          }}
        />
        <IconButton className="w-fit h-fit p-3" onClick={handleSendMsg}>
          <SendIcon className="text-white" />
        </IconButton>
      </div>
    </div>
  );
}

export default React.forwardRef(ChattingArea);
