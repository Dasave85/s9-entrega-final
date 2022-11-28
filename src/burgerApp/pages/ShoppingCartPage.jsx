import {
  Divider,
  List,
  ListItemAvatar,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "animate.css";
import { burgerPhotos } from "../../assets/burgersPhotos";

import { useAuthStore, useCartStore } from "../../store/hooks";

import { LayoutPage } from "./LayoutPage/LayoutPage";
const orderNumber = Math.floor(Math.random() * 10000);

export const ShoppingCartPage = () => {
  const { burgersCartList, totalPrice, onUpdateQuantity } = useCartStore();
  const { displayName } = useAuthStore();

  const onChangeInput = (e, burger) => {
    onUpdateQuantity(burger, Number(e.target.value));
  };
  return (
    <LayoutPage>
      <Paper
        className="animate__animated animate__fadeIn"
        elevation={24}
        sx={{ m: { xs: 2, md: 10 }, p: 2 }}
      >
        <Grid sx={{ m: 2 }}>
          <Grid display="flex" justifyContent="center" sx={{ my: 3 }}>
            <Typography variant="h4" color="initial">
              Shopping Cart
            </Typography>
          </Grid>
          <Divider />
          <Divider />
          <Grid container sx={{ my: 3 }}>
            <Grid
              display="flex"
              justifyContent="center"
              xs={12}
              sm={6}
              sx={{ mb: 1 }}
            >
              <Typography variant="h6" color="initial">
                Client: {displayName}
              </Typography>
            </Grid>

            <Grid
              display="flex"
              justifyContent="center"
              xs={12}
              sm={6}
              sx={{ mb: 1 }}
            >
              <Typography variant="h6" color="initial">
                Order number: {orderNumber}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Divider />
          <Grid>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              {burgersCartList.map((burger) => {
                const { activeBurger, quantity } = burger;
                return (
                  <div key={activeBurger.id}>
                    <Grid container>
                      <Grid xs={6} sm={4} flexGrow={1}>
                        <ListItemAvatar
                          sx={{
                            m: 3,

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            style={{
                              Height: "100px",
                              width: "100px",
                              borderRadius: "25px",
                            }}
                            src={burgerPhotos[activeBurger.id]}
                            alt={activeBurger.name}
                          />
                        </ListItemAvatar>
                      </Grid>
                      <Grid container alignItems="center" flexGrow={1}>
                        <Grid>
                          <Typography variant="body1" color="initial">
                            {activeBurger.name}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="initial"
                          >{`Quantity: ${quantity}`}</Typography>
                          <Typography variant="body1" color="initial">
                            Price: {activeBurger.price.toFixed(2)} €
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        xs={12}
                        md
                        display="flex"
                        justifyContent="end"
                        alignItems="center"
                        sx={{ m: 2 }}
                      >
                        <Grid>
                          <TextField
                            sx={{ width: 60 }}
                            type="number"
                            value={quantity}
                            onChange={(e) => onChangeInput(e, burger)}
                          />
                        </Grid>
                        <Grid
                          display="flex"
                          justifyContent="end"
                          sx={{ width: 70, ml: 2 }}
                        >
                          <Typography variant="h6" color="initial">{`${(
                            activeBurger.price * quantity
                          ).toFixed(2)} €`}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider />
                  </div>
                );
              })}
              <Divider />
              <Grid display="flex" justifyContent="end" sx={{ mt: 3 }}>
                <Typography variant="h5" color="initial">
                  Total: {totalPrice.toFixed(2)} €
                </Typography>
              </Grid>
            </List>
          </Grid>
        </Grid>
      </Paper>
    </LayoutPage>
  );
};
