import { collection, getDocs } from "firebase/firestore/lite";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../assets/data/data";
import { FirebaseDB } from "../../firebase/config";
import { setActiveBurger, setBurgerList } from "../burgers/burgersSlice";

export const useBurgerStore = () => {
  const { burgerList, activeBurger } = useSelector((state) => state.burger);
  const dispatch = useDispatch();

  // const getBurgers = async () => {
  //   const collectionRef = collection(FirebaseDB, "burgers");

  //   try {
  //     const docs = await getDocs(collectionRef);
  //     const burgerList = [];
  //     docs.forEach((burger) => {
  //       burgerList.push(burger.data());
  //     });
  //     console.log(burgerList);
  //     dispatch(setBurgerList(burgerList));
  //   } catch (error) {
  //     console.log(error);
  //     console.log(error.message);
  //   }
  // };

  const getBurgers = () => {
    dispatch(setBurgerList(data));
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
