import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
  users: [
    {
      id: 1,
      userType: " ",
      fullName: " ",
      email: " ",
      phoneNo: " ",
      graduationYear: " ",
      degree: " ",
      currentProfession: " ",
      location: " ",
      password: " ",
      profilePictureUrl: " ",
      mentor: " ",
      company: " ",
      availability: "",
      skill: [],
      // terms: Boolean,
    },
  ],
  isAuth: false,
  checkAuth: (auth) => {},
  newUser: (user) => {},
  updateUser: (user) => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

export const Userprovider = UserContext.Provider;
