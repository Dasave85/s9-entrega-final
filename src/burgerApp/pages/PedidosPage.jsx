import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useBurgerStore } from "../../store/hooks/useBurgerStore";
import BurgerCard from "../components/BurgerCard";
import { LayoutPage } from "./LayoutPage/LayoutPage";
import { burgerPhotos } from "../../assets/burgersPhotos";

export const PedidosPage = () => {
  const { burgerList } = useBurgerStore();

  return (
    <LayoutPage>
      <Box className="animate__animated animate__fadeIn">
        <Grid container spacing={5} sx={{ m: 2 }}>
          {burgerList.map(
            (burger, i) =>
              i <= 15 && (
                <Grid
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  key={burger.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <BurgerCard img={burgerPhotos[burger.id]} burger={burger} />
                </Grid>
              )
          )}
        </Grid>
      </Box>
    </LayoutPage>
  );
};
