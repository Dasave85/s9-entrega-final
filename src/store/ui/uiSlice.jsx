import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isOpenburgerModal: false,
  },
  reducers: {
    openBurgerModal: (state /* action */) => {
      state.isOpenburgerModal = true;
    },
    closeBurgerModal: (state /* action */) => {
      state.isOpenburgerModal = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openBurgerModal, closeBurgerModal } = uiSlice.actions;
