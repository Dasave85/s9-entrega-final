import Box from "@mui/material/Box";

import { Link, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
export const LinkNav = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid>
          <Link
            component={LinkRouter}
            sx={{ textDecoration: "none" }}
            color="inherit"
            to={"/"}
          >
            <Typography variant="h6">HOME</Typography>
          </Link>
        </Grid>
        <Grid>
          <Link
            component={LinkRouter}
            sx={{ textDecoration: "none" }}
            color="inherit"
            to={"/restaurante"}
          >
            <Typography variant="h6">RESTAURANTE</Typography>
          </Link>
        </Grid>
        <Grid>
          <Link
            component={LinkRouter}
            sx={{ textDecoration: "none" }}
            color="inherit"
            to={"/pedido"}
          >
            <Typography variant="h6">PEDIDO</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
