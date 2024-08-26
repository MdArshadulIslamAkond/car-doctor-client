import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, getAuth, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loadings, setLoadings] = useState(true);
    const creatUser = (email, password)=>{ 
        setLoadings(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password)=>{
        setLoadings(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = ()=>{
        setLoadings(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
            setLoadings(false);
        });
        return () => unsubscribe(); // Clean up function to unsubscribe
    })
    const authInfo = {
        user,
        loadings,
        creatUser,
        signInUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;