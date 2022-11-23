import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBurger,
  updateQuantity,
  addTotalItems,
  addTotalPrice,
  resetCart,
  deleteBurger,
} from "../cart/cartSlice";

import { useUiStore } from "./useUiStore";

export const useCartStore = () => {
  const { burgersCartList, totalItemsToCart, totalPrice } = useSelector(
    (state) => state.cart
  );
  const { activeBurger } = useSelector((state) => state.burger);
  const { onCloseBurgerModal, onShowDeleteBurger } = useUiStore();

  const dispatch = useDispatch();

  useEffect(() => {
    getTotalItemsToCart();
    // eslint-disable-next-line
  }, [burgersCartList]);

  useEffect(() => {
    getTotalPrice();
    // eslint-disable-next-line
  }, [burgersCartList]);

  const addBurgerToCart = (quantity = 1) => {
    const burger = burgersCartList.find(
      (burger) => burger.activeBurger.id === activeBurger.id
    );

    if (burger) {
      const newQuantity = { ...burger };
      newQuantity.quantity = burger.quantity + quantity;
      dispatch(updateQuantity(newQuantity));
      onCloseBurgerModal();
      return;
    }

    const burguerToCart = {
      activeBurger,
      quantity,
    };
    dispatch(addBurger(burguerToCart));
    onCloseBurgerModal();
  };

  const getTotalItemsToCart = () => {
    let totalItems = 0;
    burgersCartList.map((burger) => (totalItems += burger.quantity));
    dispatch(addTotalItems(totalItems));
  };

  const getTotalPrice = () => {
    let total = 0;
    burgersCartList.map(
      ({ activeBurger, quantity }) => (total += activeBurger.price * quantity)
    );
    dispatch(addTotalPrice(total));
  };

  const onResetCart = () => {
    dispatch(resetCart());
  };

  const onUpdateQuantity = (burger, newQuantity) => {
    if (newQuantity === 0) {
      onDeleteItem(burger);
      return;
    }
    const newBurger = { ...burger };
    newBurger.quantity = newQuantity;

    dispatch(updateQuantity(newBurger));
  };

  const onDeleteItem = (burger) => {
    onShowDeleteBurger();
    setTimeout(() => {
      dispatch(deleteBurger(burger));
    }, 1000);
  };

  return {
    //PROPERTIES
    burgersCartList,
    totalItemsToCart,
    totalPrice,

    //METHODS
    addBurgerToCart,
    onResetCart,
    onUpdateQuantity,
  };
};
