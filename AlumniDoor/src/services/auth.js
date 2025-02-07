// Ye file backend services use krne ke liye hai ... isse ye fayda hai ki ye ek wraper create kr deta hai ki apne service ke arround .. if future me humko service change krna hai to sirf hum yehan hi change krte hai pure frontend me krne hi jaurat nhi hai

import config from "../config/config";
import { Client, Account, ID } from "appwrite";
import dbService from "./AD_DB/userDB";

export class AuthService {
  // Logic for creating account, login, logout,etc
  client = new Client();
  account;

  constructor() {
    // ye constructor tabhi call hoga jb hum authService object call krenge , yehan ussi ke logic code likhenge

    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount(
    // id,
    userType,
    fullName,
    email,
    phoneNo,
    graduationYear,
    degree,
    currentProfession,
    password
  ) {
    // yehan pe jitne createAccount se hum object pass krwa sakte hai , usse destructure kr ke bhi pass krwa sakte hai

    try {
      // code for creating account  and use await kyuki async use kiye hai

      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        fullName
      );
  
      if (userAccount) {
        // console.log("success");
        const response = await dbService.createUser(
          userType,
          fullName,
          email,
          phoneNo,
          graduationYear,
          degree,
          currentProfession
        );
        await this.login({ email, password });
        return response;
      } else {
        console.error("Account Error :: ", error);
      }
    } catch (error) {
      console.error("Create Account Failed :: ", error);
    }
  }

  async login(email, password) {
    try {
      // Auth code for login
      await this.account
        .createEmailPasswordSession(email, password)
        .then((session) => {
          return session.userId;
        });
    } catch (error) {
      // console.log("error: ", error);
      return null;
    }
  }

  async getCurrentUser() {
    // Ye service check krne ke liye hai ki aap already login ho ki nhi

    try {
      const user = await this.account.get();
      // return user
      if (user) {
        const email = user.email;
        const userData = await dbService.getUser(email);
        return userData; // Return the user object if successful;
      } else {
        return null;
      }
      // console.log(data);

      // Return the user object
    } catch (error) {
      // console.error("Get Current User Error: ", error);
      // throw error;
      return null; // try wala check me error aaya to ye hoga
    }
  }

  async logout() {
    try {
      //Logic code
      await this.account
        .deleteSession("current")
        .then(() => console.log("Log Out Successfully"));
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
