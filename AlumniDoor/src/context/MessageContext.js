import React, { createContext, useContext } from "react";

export const MessageContext = createContext({
    msgs: [
        {
            id:1,
            sendTo: "",
            sendFrom: "",
            date: "",
            msg:"",

        },
    ],

    newMsg: (msg)=>{},

})

export const useMsg = () => {
    return useContext(MessageContext);
}

export const MsgProvider = MessageContext.Provider;