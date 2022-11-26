import React from "react";
import { LayoutPage } from "./LayoutPage/LayoutPage";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Button } from "@mui/material";
import img from "../../assets/burger_french_fries_4k_hd_food-1920x1080.jpg";
import { useNavigate } from "react-router-dom";
import "animate.css";

const styles = {
  container: {
    background: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "55%",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    height: "calc(100vh - 150px)",
  },
};

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <LayoutPage>
        <Grid
          className="animate__animated animate__fadeIn"
          container
          style={styles.container}
          sx={{ height: "calc(100vh - 150px)" }}
        >
          <Grid xs={12} sx={{ m: { xs: 2, md: 7 } }}>
            <Typography
              variant="h3"
              fontWeight={400}
              color="initial"
              xs={12}
              sx={{ mb: 5 }}
            >
              Best World Burger
            </Typography>
            <Grid xs={12} sm={10} md={7} lg={5}>
              <Typography
                variant="h4"
                fontWeight={300}
                color="initial"
                sx={{ mb: 1 }}
              >
                Todas nuestras hamburguesas son hechas artesanalmente.
              </Typography>
              <Typography variant="h4" fontWeight={300} color="initial">
                Con ingredientes naturales y acompañadas de bebida y patatas
              </Typography>
            </Grid>
            <Grid
              xs={5}
              display="flex"
              height="100px"
              justifyContent="end"
              alignItems="center"
              sx={{ mt: 3 }}
            >
              <Button
                onClick={() => navigate("/pedido")}
                size="large"
                variant="outlined"
                sx={{ width: "250px", height: "75px" }}
                color="error"
              >
                realiza tu pedido
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </LayoutPage>
    </>
  );
};
