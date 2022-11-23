import { useDispatch, useSelector } from "react-redux";
import { burgerApi } from "../../api";
import { setActiveBurger, setBurgerList } from "../burgers/burgersSlice";

export const useBurgerStore = () => {
  const { burgerList, activeBurger } = useSelector((state) => state.burger);
  const dispatch = useDispatch();

  const getBurgers = async () => {
    const url = "https://burgers1.p.rapidapi.com/burgers";
    const { data } = await burgerApi.get(url);
    const burgerList = [];
    for (const { id, name, description, ingredients } of data) {
      const price = Math.random().toFixed(2) * (14 - 10 + 1) + 10;
      let newBurger = { id, name, description, ingredients, price };
      burgerList.push(newBurger);
    }
    dispatch(setBurgerList(burgerList));
  };

  const onActiveBurger = (burger) => {
    dispatch(setActiveBurger(burger));
  };

  return {
    //PROPERTIES
    burgerList,
    activeBurger,

    //METHODS
    getBurgers,
    onActiveBurger,
  };
};
