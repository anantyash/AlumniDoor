import React, { useEffect, useRef, useState } from "react";
import { useMsg } from "../context/MessageContext";

function ChatBox({ messageid }) {
  const { msgs } = useMsg();
  const [mesg, setMesg] = useState([]);
  const messagesEndRef = useRef(null);

  const fetchMesg = () => {
    setMesg(msgs.filter((message) => message.sendTo === messageid));
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchMesg();
  }, [msgs, messageid]); // Fetch messages when msgs or messageid changes

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom after messages are updated
  }, [mesg]);

  return (
    <div className="py-5 mb-3 px-7 flex flex-col gap-2 overflow-y-scroll overscroll-contain scrollbar-none scroll-smooth">
      {mesg.length ? (
        mesg.map((message) => (
          <div
            key={message.id}
            className="rounded-full transition-all ease-in-out text-center bg-greenBgColor w-fit h-fit p-3 self-end"
          >
            <span>{message.msg}</span>
          </div>
        ))
      ) : (
        <div className="h-full flex justify-center mb-24 text-lg font-semibold">
          Send Message to start Conversation
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatBox;
