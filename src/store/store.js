import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { burgerSlice } from "./burgers/burgersSlice";
import { cartSlice } from "./cart";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    burger: burgerSlice.reducer,
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});
