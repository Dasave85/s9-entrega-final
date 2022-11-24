import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", background: "#f1efefbc" }}
    >
      <Grid>
        <CircularProgress color="primary" />
      </Grid>
    </Grid>
  );
};
