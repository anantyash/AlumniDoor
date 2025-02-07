import config from "../../config/config";
import { Client, Databases, ID, Query } from "appwrite";

export class DbService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
  }

  async createUser(
    userType,
    fullName,
    email,
    phoneNo,
    graduationYear,
    degree,
    currentProfession
  ) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        ID.unique(),
        {
          userType,
          fullName,
          email,
          phoneNo,
          graduationYear,
          degree,
          currentProfession,
        }
      );
    } catch (error) {
      console.log("database Error", error);
    }
  }

  async getUser(email) {
    try {
      const response = await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        [Query.equal("email", email)]
      );
      if (response.documents.length > 0) {
        const userData = response.documents[0]; // Assuming email is unique, take the first document
        return {
          id: userData.$id,
          userType: userData.userType,
          fullName: userData.fullName,
          email: userData.email,
          phoneNo: userData.phoneNo,
          graduationYear: userData.graduationYear,
          degree: userData.degree,
          currentProfession: userData.currentProfession,
          mentor: userData.mentor,
        };
      } else {
        console.warn("No user found with the provided email.");
        return null; // Return null if no user is found
      }
    } catch (error) {
      console.log("Get DB Error: ", error);
    }
  }

  async getAllUser(id) {
    try {
      const response = await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        [Query.notEqual("$id", id)]
      );
      if (response.documents.length > 0) {
        // const arrLength = response.documents.length
        // while (arrLength>0) {
        //   const userData =  response.documents.[0]; // Assuming email is unique, take the first document
        //   arrLength--;
        // }
        return response.documents;
        // {
        //   userData,
        //   // id: userData.$id,
        //   // userType: userData.userType,
        //   // fullName: userData.fullName,
        //   // email: userData.email,
        //   // phoneNo: userData.phoneNo,
        //   // graduationYear: userData.graduationYear,
        //   // degree: userData.degree,
        //   // currentProfession: userData.currentProfession,
        //   // mentor: userData.mentor,
        // };
      } else {
        console.warn("No user found with the provided email.");
        return null; // Return null if no user is found
      }
    } catch (error) {
      console.log("Get DB Error: ", error);
    }
  }

  async createMentor(userid, availability, skills) {
    try {
      return await this.databases
        .createDocument(
          config.appwriteDatabaseId,
          config.appwriteMentorsCollectionId,
          ID.unique(),
          { userid, availability, skills }
        )
        .then(() => console.log("Mentor Created"));
    } catch (error) {
      console.error("Error for Creating Mentor", error);
    }
  }

  async getAllMentors(id, mentors) {
    try {
      const response = await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        [Query.notEqual("$id", id), Query.equal("mentor", mentors)]
      );
      if (response.documents.length > 0) {
        return response.documents;
      } else {
        console.warn("No user found with the provided email.");
        return null; // Return null if no user is found
      }
    } catch (error) {
      console.log("Get DB Error: ", error);
    }
  }
}

const dbService = new DbService();

export default dbService;
