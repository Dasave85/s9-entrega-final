import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";

export const LayoutStyled = ({ children, title }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid xs={12} sx={{ padding: 3, width: 480 }}>
        <Typography
          variant="h4"
          color="initial"
          sx={{ textAlign: "center", mb: 1 }}
        >
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
