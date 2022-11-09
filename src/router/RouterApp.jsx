import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, RegisterPage } from "../auth";
import { BurgerApp } from "../burgerApp/pages/BurgerApp";

export const RouterApp = () => {
  const isLogin = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" element={<BurgerApp />} />
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
