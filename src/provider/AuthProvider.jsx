import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
  signOut,
} from "firebase/auth";
import axios from "axios";
import { axiosSecure } from "../hooks/useAxios";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loadings, setLoadings] = useState(true);
  
  const creatUser = (email, password) => {
    setLoadings(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoadings(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoadings(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      const loggedEmail = authUser?.email || user?.email;
      const loggedUser = { email: loggedEmail };
      if (authUser) {
        axiosSecure
          .post("/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
            // handle user data
          });
        setUser(authUser);
      } else {
        axiosSecure
          .post("/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
            // handle user data
          });

        setUser(null);
      }
      setLoadings(false);
    });
    return () => unsubscribe(); // Clean up function to unsubscribe
  });
  const authInfo = {
    user,
    loadings,
    creatUser,
    signInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
