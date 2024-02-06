"use client";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import auth, { googleProvider } from "../firebase/firebase.auth";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = async (updateUser = {}) => {
    setLoading(true);
    await updateProfile(auth.currentUser, updateUser);
    setUser((preUser) => ({ ...preUser, ...updateUser }));
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      // get and set token
      if (currentUser) {
        axios
          .get(
            `https://cemrd-online.vercel.app/api/auth/jwt/${currentUser.email}`,
            {
              email: currentUser.email,
            }
          )
          .then((data) => {
            console.log(data);
            localStorage.setItem("access-token", data.data.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });

    () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    loading,
    createUser,
    signIn,
    profileUpdate,
    googleLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
