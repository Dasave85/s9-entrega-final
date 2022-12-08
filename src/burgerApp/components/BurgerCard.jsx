import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { useBurgerStore } from "../../store/hooks/useBurgerStore";
import { useUiStore } from "../../store/hooks";
import { BurgerModal } from "./BurgerModal";

export default function BurgerCard({ burger }) {
  const { name, description, img } = burger;
  const { onActiveBurger } = useBurgerStore();
  const newDescription = useMemo(() => {
    return description.length < 25
      ? description
      : `${description.substring(0, 25)}...`;
  }, [description]);

  const { isOpenburgerModal, onOpenBurgerModal } = useUiStore();

  const buttonClick = () => {
    onActiveBurger(burger);
    onOpenBurgerModal();
  };
  return (
    <Button disabled={isOpenburgerModal} onClick={buttonClick}>
      <BurgerModal />
      <Card sx={{ width: 345, height: 300 }}>
        <CardMedia component="img" height="160" image={img} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {newDescription}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}
