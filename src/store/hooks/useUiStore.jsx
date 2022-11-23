import { useDispatch, useSelector } from "react-redux";
import { closeBurgerModal, openBurgerModal, setShowDeleteBurger } from "../ui";

export const useUiStore = () => {
  const { isOpenburgerModal, showDeleteBurger } = useSelector(
    (state) => state.ui
  );
  const dispatch = useDispatch();

  const onOpenBurgerModal = () => {
    dispatch(openBurgerModal());
  };
  const onCloseBurgerModal = () => {
    dispatch(closeBurgerModal());
  };

  const onShowDeleteBurger = () => {
    dispatch(setShowDeleteBurger());
  };

  return {
    //PROPERTIES
    isOpenburgerModal,
    showDeleteBurger,

    //METHODS
    onOpenBurgerModal,
    onCloseBurgerModal,
    onShowDeleteBurger,
  };
};
