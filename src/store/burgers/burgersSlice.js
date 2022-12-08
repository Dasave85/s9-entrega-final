import { createSlice } from "@reduxjs/toolkit";

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    burgerList: [],
    activeBurger: {
      id: null,
      name: null,
      description: null,
      price: null,
      img: null,
    },
  },
  reducers: {
    setBurgerList: (state, { payload }) => {
      state.burgerList = payload;
    },
    setActiveBurger: (state, { payload }) => {
      state.activeBurger.id = payload.id;
      state.activeBurger.name = payload.name;
      state.activeBurger.description = payload.description;
      state.activeBurger.price = payload.price;
      state.activeBurger.img = payload.img;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBurgerList, setActiveBurger } = burgerSlice.actions;
