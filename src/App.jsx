import { Provider } from "react-redux";
import { RouterApp } from "./router";
import { store } from "./store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterApp />
      </Provider>
    </>
  );
};
