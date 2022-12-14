import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import { useBurgerStore, useCartStore, useUiStore } from "../../store/hooks";

import { Card, CardContent, CardMedia, IconButton } from "@mui/material";

import { ShoppingCart } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", sm: "450px" },

  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 2,
};

export const BurgerModal = () => {
  const { isOpenburgerModal, onCloseBurgerModal } = useUiStore();
  const { activeBurger } = useBurgerStore();
  const { addBurgerToCart } = useCartStore();
  const { name, description, price, img } = activeBurger;
  return (
    <div>
      <Modal
        aria-labelledby={name}
        aria-describedby={description}
        open={isOpenburgerModal}
        onClose={onCloseBurgerModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(255,255,255, 0.1)",
          },
        }}
      >
        <Fade in={isOpenburgerModal}>
          <Box sx={style}>
            <Card sx={{ width: "auto", height: { xs: "100%", sm: "auto" } }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "center" }}
                  component="div"
                >
                  {name}
                </Typography>
                <CardMedia
                  component="img"
                  width="100%"
                  height="auto"
                  image={img}
                  alt={name}
                  sx={{ my: 2 }}
                />
                <Typography variant="h6" color="initial">
                  Descripcion.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
                {/* <Typography
                  variant="h6"
                  sx={{ mt: 2, pb: 0 }}
                  color="text.secondary"
                >
                  Ingredients:
                  <Grid sx={{ mt: 1 }} container>
                    {ingredients.map((ingredient, i) => (
                      <Grid xs={4} key={i}>
                        <Typography
                          variant="body1"
                          sx={{ fontSize: "10px" }}
                          color="initial"
                        >
                          ?? {ingredient}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Typography> */}
                <Grid
                  display="flex"
                  alignContent="center"
                  justifyContent="space-evenly"
                  sx={{ mt: 2 }}
                >
                  <Grid display="flex" alignItems="center">
                    <Typography
                      variant="h4"
                      color="error"
                    >{`${price} ???`}</Typography>
                  </Grid>
                  <IconButton onClick={() => addBurgerToCart()}>
                    <Typography
                      display="flex"
                      alignItems="center"
                      variant="h5"
                      color="primary"
                    >
                      <ShoppingCart sx={{ mr: 1 }} color="primary" /> A??adir al
                      carrito
                    </Typography>
                  </IconButton>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
