import { createContext, useContext } from "react";

export const UserContext = createContext({
  users: [
    {
      id: 1,
      userType: "Alumni",
      fullName: "Anant",
      email: "anant@gmail.com",
      phoneNo: "9878438870",
      graduationYear: "2020",
      degree: "Computer Science and Engineering",
      currentProfession: "CTO",
      location: "Gujarat",
      password: "Qwerty@123",
      profilePictureUrl: "Qwerty@123",
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
