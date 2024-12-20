import { createContext, useContext } from "react";

export const UserContext = createContext({
  users: [
    {
      id: 1,
      user: "",
      fullname: "",
      userName: "example@gmail.com",
      password: "Qwerty@123",
    },
  ],
  isAuth: true,
  checkAuth: (user) => {},
  newUser:(user)=>{}
});

export const useUser = () => {
  return useContext(UserContext);
};

export const Userprovider = UserContext.Provider;
