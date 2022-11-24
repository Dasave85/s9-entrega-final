import { useDispatch, useSelector } from "react-redux";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  onChecking,
  onLogin,
  onLogout,
  onDeleteErrorMessage,
} from "../auth/authSlice";
import { FirebaseAuth } from "../../firebase";
import { useMemo } from "react";
import { useCartStore } from "./useCartStore";

export const useAuthStore = () => {
  const { status, uid, email, displayName, errorMessage } = useSelector(
    (state) => state.auth
  );
  const { onResetCart } = useCartStore();

  const isChecking = useMemo(() => status === "checking", [status]);
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  const startLoginWithGoogle = async () => {
    dispatch(onChecking());
    try {
      const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
      const { uid, displayName, email, photoURL } = user;
      dispatch(onLogin({ uid, displayName, email, photoURL }));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(onLogout({ errorMessage }));
    }
  };

  const startRegisterWithEmailPassword = async ({
    displayName,
    email,
    password,
  }) => {
    dispatch(onChecking());
    try {
      const { user } = await createUserWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );
      const { uid } = user;
      await updateProfile(FirebaseAuth.currentUser, {
        displayName,
      });
      dispatch(onLogin({ displayName, email, uid }));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(onLogout({ errorMessage }));
    }
  };

  const startLoginWithEmailPassword = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { user } = await signInWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );
      const { uid, displayName } = user;

      dispatch(onLogin({ email, uid, displayName }));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(onLogout({ errorMessage }));
    }
  };

  const startLogout = async () => {
    await signOut(FirebaseAuth);
    onResetCart();
  };
  const deleteErrorMessage = () => {
    dispatch(onDeleteErrorMessage());
  };

  return {
    //PROPERTIES
    status,
    uid,
    email,
    displayName,
    errorMessage,
    isChecking,

    //METHODS
    startLoginWithGoogle,
    startLogout,
    startRegisterWithEmailPassword,
    startLoginWithEmailPassword,
    deleteErrorMessage,
  };
};
