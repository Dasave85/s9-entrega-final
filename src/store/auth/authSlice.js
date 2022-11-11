import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // not-authenticated,  authenticated
    uid: null,
    email: null,
    displayName: null,
    errorMessage: null,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.errorMessage = null;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.errorMessage = payload.errorMessage;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout } = authSlice.actions;
