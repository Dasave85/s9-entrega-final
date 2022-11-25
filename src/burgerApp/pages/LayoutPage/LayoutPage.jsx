import { LocalGroceryStoreOutlined, Logout } from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/—Pngtree—burger lettuce onion neon light_6406745.png";
import { useCartStore } from "../../../store/hooks";
import { useAuthStore } from "../../../store/hooks/useAuthStore";
import { LinkNav } from "../../components";

export const LayoutPage = ({ children }) => {
  const { startLogout } = useAuthStore();

  const navigate = useNavigate();
  const { totalItemsToCart } = useCartStore();
  return (
    <Box position="absolute" sx={{ height: "100vh", width: "100vw" }}>
      <Grid container sx={{ background: "#05032d" }}>
        <Grid
          display="flex"
          justifyContent={"space-around"}
          alignItems={"center"}
          xs={12}
          md={5}
          order={{ xs: 2, md: 1 }}
          sx={{ color: "white", textAlign: "center" }}
        >
          <LinkNav />
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={2}
          order={{ xs: 1, md: 2 }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: "150px", height: "auto" }}
          />
        </Grid>
        <Grid
          xs={12}
          display="flex"
          justifyContent={{ xs: "center", md: "end" }}
          alignItems="center"
          md={5}
          sx={{ pr: 2 }}
          order={{ xs: 3 }}
        >
          <IconButton onClick={() => navigate("/cart")} sx={{ color: "white" }}>
            <Badge
              badgeContent={totalItemsToCart}
              sx={{ m: 4 }}
              color="primary"
            >
              <LocalGroceryStoreOutlined fontSize="large" />
            </Badge>
          </IconButton>
          <IconButton onClick={startLogout} sx={{ color: "white" }}>
            <Logout />
          </IconButton>
        </Grid>
      </Grid>
      {children}
    </Box>
  );
};
