import { useDispatch, useSelector } from "react-redux";
import { closeBurgerModal, openBurgerModal } from "../ui";

export const useUiStore = () => {
  const { isOpenburgerModal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const onOpenBurgerModal = () => {
    dispatch(openBurgerModal());
  };
  const onCloseBurgerModal = () => {
    dispatch(closeBurgerModal());
  };

  return {
    //PROPERTIES
    isOpenburgerModal,

    //METHODS
    onOpenBurgerModal,
    onCloseBurgerModal,
  };
};
