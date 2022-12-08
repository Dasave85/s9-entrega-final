import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, RegisterPage } from "../auth";
import {
  HomePage,
  PedidosPage,
  RestaurantePage,
  ShoppingCartPage,
} from "../burgerApp";
import { useAuthStore, useBurgerStore, useCheckingUser } from "../store/hooks";

import { CheckingAuth } from "../ui";

export const RouterApp = () => {
  const isChecking = useCheckingUser();
  const { status: isLogin } = useAuthStore();

  const { getBurgers } = useBurgerStore();

  useEffect(() => {
    console.log("object");
    getBurgers();
  }, []);

  if (isChecking) {
    return <CheckingAuth />;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLogin === "authenticated" ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurante" element={<RestaurantePage />} />
              <Route path="/pedido" element={<PedidosPage />} />
              <Route path="/cart" element={<ShoppingCartPage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/auth" element={<LoginPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
              <Route path="/*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};
