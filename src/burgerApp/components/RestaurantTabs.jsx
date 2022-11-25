import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import local from "../../assets/local.webp";
import personal from "../../assets/personal.jpg";
import "animate.css";

export const RestaurantTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="animate__animated animate__fadeIn"
      sx={{ width: "100%", typography: "body1" }}
    >
      <TabContext value={value}>
        <Grid
          xs={12}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-end" }}
          sx={{ my: 3, mr: { xs: 2, md: 20 } }}
        >
          <Box
            display="flex"
            justifyContent="center"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <TabList onChange={handleChange} aria-label="tab-restaurant">
              <Tab sx={{ mx: 2 }} label="Instalaciones" value="1" />
              <Tab sx={{ mx: 2 }} label="Personal" value="2" />
            </TabList>
          </Box>
        </Grid>
        <Box sx={{ mt: 0 }} spacing={0}>
          <Grid container>
            <Grid
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TabPanel value="1">
                <img
                  className="animate__animated animate__fadeInLeft"
                  src={local}
                  alt="local"
                  height="auto"
                  width="100%"
                  sx={{ maxWidth: "400px" }}
                />
              </TabPanel>
              <TabPanel value="2">
                <Typography
                  sx={{ p: { xs: 2, md: 6 } }}
                  className="animate__animated animate__fadeIn"
                  variant="h4"
                  fontWeight={200}
                  color="initial"
                >
                  Le atenderan un equipo joven y dinamico. Muy profesional y
                  cualificado que cumpliran toda la normativa COVID-19.
                </Typography>
              </TabPanel>
            </Grid>
            <Grid
              xs={12}
              md={6}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TabPanel value="1">
                <Typography
                  sx={{ p: { xs: 2, md: 6 } }}
                  className="animate__animated animate__fadeIn"
                  variant="h4"
                  fontWeight={200}
                  color="initial"
                >
                  Best World Burger es un restaurante urbano con una decoración
                  moderna y actual que se encuentra en la Vía Layetana, en el
                  Passeig del Born. Realizamos una de las mejores hamburguesas
                  de Barcelona, al menos así lo consideran nuestros clientes.
                </Typography>
              </TabPanel>
              <TabPanel sx={{ maxWidth: "100vw" }} value="2">
                <img
                  className="animate__animated animate__fadeInUp"
                  src={personal}
                  alt="personal"
                  height="auto"
                  width="100%"
                  sx={{ maxWidth: "400px" }}
                />
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </TabContext>
    </Box>
  );
};
