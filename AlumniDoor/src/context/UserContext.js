import { createContext, useContext } from "react";

export const UserContext = createContext({
  users: [
    {
      id: "",
      userType: "",
      fullName: "",
      email: "",
      phoneNo: "",
      graduationYear: "",
      degree: "",
      currentProfession: "",
      location: "",
      password: "",
      profilePictureUrl: "",
      // terms: Boolean,
    },
  ],
  isAuth: true,
  checkAuth: (user) => {},
  newUser: (user) => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

export const Userprovider = UserContext.Provider;
