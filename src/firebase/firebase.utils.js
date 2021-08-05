import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCQD-86TRP5nMIwhO8_jEFtzUW2u9dA9N0",
  authDomain: "crwn-db-cf7df.firebaseapp.com",
  projectId: "crwn-db-cf7df",
  storageBucket: "crwn-db-cf7df.appspot.com",
  messagingSenderId: "333177626934",
  appId: "1:333177626934:web:beac153c027e24ab6e1397",
  measurementId: "G-VKPNRCPMQK",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
