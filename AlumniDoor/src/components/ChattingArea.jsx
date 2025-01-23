import { Avatar, IconButton, InputBase } from "@mui/material";
import React, { useState } from "react";
import { ALUMNIDOOR49 } from "../assets";
import { SendIcon } from "../assets/iconIndex";
import { useMsg } from "../context/MessageContext";

function ChattingArea() {
  const { msgs, newMsg } = useMsg();
  const [msg, setMsg] = useState("");

  const msguserid = "123";

  let mesg = msgs.filter((mesgs) => mesgs.sendTo === parseInt(msguserid, 10));

  const handleSendMsg = () => {
    if (msg.trim()) {
      newMsg({
        id: " ",
        sendTo: "123", //msguserid
        sendFrom: " ", //userid
        msg: msg,
      });
      setMsg("");
      // console.log(mesg);
    }
  };

  return (
    <div className="w-full h-full bg-white rounded-r-xl">
      <div // Header
        className=" px-7 flex items-center bg-greenColor rounded-tr-xl"
      >
        <div className=" flex w-fit text-white py-4 pl-2 gap-5">
          <Avatar className="w-14 h-14 " src={ALUMNIDOOR49} />
          <div className=" flex flex-col h-full justify-center font-sans">
            <h3>Phunsukh Wangdu</h3>
            <span className="flex items-center gap-1 ">
              {" "}
              Alumni{" "}
              {/* <WorkspacePremiumIcon className="text-orange-500 text-base rounded-full" /> */}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full  h-4/5 -mb-3 bg-green-200 flex flex-col justify-end font-sans gap-2 ">
        <div className="py-5 mb-3 px-7 flex flex-col gap-2">
          <div className="rounded-full bg-white w-fit p-3">
            Hello, Demo Message here
          </div>

          {msgs.length > 0
            ? msgs.map((message) => (
                <div className="rounded-full bg-white w-fit p-3 self-end">
                  <span>{message.msg}</span>
                </div>
              ))
            : null}
        </div>

        {/*
          <div className="rounded-full bg-white w-fit p-3 self-end">
            Hello, Message Area 3
          </div> */}
      </div>
      <div className=" px-5 py-3 rounded-br-xl flex gap-3 bg-greenColor items-center">
        <InputBase
          className="bg-white w-full rounded-full h-11 pl-5 pr-2 text-base"
          placeholder="Type Messages"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <IconButton className="w-fit h-fit p-3" onClick={handleSendMsg}>
          <SendIcon className="text-white" />
        </IconButton>
      </div>
      {/* <div //Main Content
      className="flex flex-col bg-greenBgColor w-full h-full">
        <div>hello</div>
      </div> */}
    </div>
  );
}

export default ChattingArea;
