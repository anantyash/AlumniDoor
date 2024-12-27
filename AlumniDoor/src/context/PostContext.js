import React, { createContext, useContext } from "react";

export const PostContext = createContext({
    posts:[
        {
            id: '' ,
            content:"",
            imgurl:''
        }
    ],

    newPost: (post)=>{}
       
})

export const usePost = () =>{
    return useContext(PostContext);
};

export const PostProvider = PostContext.Provider;