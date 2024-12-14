import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext } from "react";
import auth from "./../Firebase/Firebase.init";

export const jobPortalContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  // create User With Email
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // create User With Google
  const createUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = { createUserWithEmail, createUserWithGoogle };
  return (
    <jobPortalContext.Provider value={authInfo}>
      {children}
    </jobPortalContext.Provider>
  );
};

export default AuthProvider;
