import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    burgersCartList: [],
    totalItemsToCart: null,
    totalPrice: null,
  },
  reducers: {
    addBurger: (state, { payload }) => {
      state.burgersCartList.push(payload);
    },
    updateQuantity: (state, { payload }) => {
      state.burgersCartList = state.burgersCartList.map((burgerCart) => {
        if (burgerCart.activeBurger.id === payload.activeBurger.id) {
          return payload;
        }
        return burgerCart;
      });
    },
    addTotalItems: (state, { payload }) => {
      state.totalItemsToCart = payload;
    },

    addTotalPrice: (state, { payload }) => {
      state.totalPrice = payload;
    },
    resetCart: (state) => {
      state.burgersCartList = [];
      state.totalItemsToCart = null;
      state.totalPrice = null;
    },
    deleteBurger: (state, { payload }) => {
      state.burgersCartList = state.burgersCartList.filter(
        (burger) => burger.activeBurger.id !== payload.activeBurger.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addBurger,
  updateQuantity,
  addTotalItems,
  addTotalPrice,
  resetCart,
  deleteBurger,
} = cartSlice.actions;
