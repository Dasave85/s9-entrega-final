import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { FirebaseAuth } from "../../firebase";

import { onChecking, onLogin, onLogout } from "../auth/authSlice";
import { useAuthStore } from "./useAuthStore";

export const useCheckingUser = () => {
  const dispatch = useDispatch();
  const { isChecking } = useAuthStore();

  useEffect(() => {
    dispatch(onChecking());

    onAuthStateChanged(FirebaseAuth, async (user) => {
      try {
        if (!user) dispatch(onLogout());
        const { uid, displayName, email, photoURL } = user;
        dispatch(onLogin({ uid, displayName, email, photoURL }));
      } catch (error) {
        dispatch(onLogout());
      }
    });
  }, []);

  return isChecking;
};
