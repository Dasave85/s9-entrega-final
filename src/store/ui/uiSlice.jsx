import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isOpenburgerModal: false,
    showDeleteBurger: false,
  },
  reducers: {
    openBurgerModal: (state /* action */) => {
      state.isOpenburgerModal = true;
    },
    closeBurgerModal: (state /* action */) => {
      state.isOpenburgerModal = false;
    },
    setShowDeleteBurger: (state) => {
      state.showDeleteBurger = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openBurgerModal,
  closeBurgerModal,
  setShowDeleteBurger,
} = uiSlice.actions;
