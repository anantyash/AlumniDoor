import { createContext, useContext } from "react";

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
  isAuth: true,
  checkAuth: (user) => {},
  newUser: (user) => {},
  updateUser: (user) => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

export const Userprovider = UserContext.Provider;
