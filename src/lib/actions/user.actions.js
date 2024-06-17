import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";


const {
    APPWRITE_DATABASE_ID: DATABASE_ID,
    APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,

  } = process.env;
  
  export const getUserInfo = async ({ userId }) => {
    try {
      const { database } = await createAdminClient();
  
      const user = await database.listDocuments(
        DATABASE_ID,
        USER_COLLECTION_ID,
        [Query.equal('userId', [userId])]
      )
  
      return JSON.Stringify(user.documents[0]);
    } catch (error) {
      console.log(error)
    }
  }
  
  export const signIn = async ({ email, password }) => {
    try {
      const { account } = await createAdminClient();
      const session = await account.createEmailPasswordSession(email, password);
  
      cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });
  
      const user = await getUserInfo({ userId: session.userId }) 
  
      return JSON.Stringify(user);
    } catch (error) {
      console.error('Error', error);
    }
  }
  
  export const signUp = async ({ values }) => {
    const { email, firstName, lastName } = userData;
    
    let newUserAccount;
  
    try {
      const { account, database } = await createAdminClient();
  
      newUserAccount = await account.create(
        ID.unique(), 
        email, 
        password, 
        `${firstName} ${lastName}`
      );
  
      if(!newUserAccount) throw new Error('Error creating user')
  
      const newUser = await database.createDocument(
        DATABASE_ID,
        USER_COLLECTION_ID,
        ID.unique(),
        {
          ...values
         
          
        }
      )
  
      const session = await account.createEmailPasswordSession(email, password);
  
      cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });
  
      return JSON.stringify(newUser);
    } catch (error) {
      console.error('Error', error);
    }
  }
  
  export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const result = await account.get();
  
      const user = await getUserInfo({ userId: result.$id})
  
      return JSON.Stringify(user);
    } catch (error) {
      console.log(error)
      return null;
    }
  }
  
  export const logoutAccount = async () => {
    try {
      const { account } = await createSessionClient();
  
      cookies().delete('appwrite-session');
  
      await account.deleteSession('current');
    } catch (error) {
      return null;
    }
  }