import { useForm } from "react-hook-form";
import { Link as LinkRouter } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { LayoutStyled } from "./LayoutStyled";
import "animate.css";
import { FormHelperText, TextField, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { useAuthStore } from "../../store/hooks/useAuthStore";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const LoginPage = () => {
  const {
    isChecking,
    startLoginWithGoogle,
    startLoginWithEmailPassword,
    errorMessage,
    deleteErrorMessage,
  } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => startLoginWithEmailPassword(data);

  useEffect(() => {
    if (!!errorMessage) {
      Swal.fire("Error de credenciales", "", "error");
      deleteErrorMessage();
    }
  }, [errorMessage]);

  return (
    <LayoutStyled title={"Login"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid sx={{ mt: 3, mb: 2 }}>
          <TextField
            fullWidth
            label="email"
            placeholder="user@google.com"
            error={!!errors.email}
            type="email"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "No has introducido un email valido",
              },
            })}
          ></TextField>
          {errors?.email && (
            <div className="animate__animated animate__headShake">
              <FormHelperText sx={{ ml: 2 }} error>
                {errors.email.message}
              </FormHelperText>
            </div>
          )}
        </Grid>
        <Grid>
          <TextField
            fullWidth
            inputProps={{ maxLength: 6 }}
            type="password"
            label="password"
            placeholder="tu nombre"
            error={!!errors.password}
            {...register("password", {
              required: "El password es obligatorio",
              minLength: {
                value: 6,
                message: "El password debe de tener 6 caracteres",
              },
            })}
          ></TextField>
          {errors?.password && (
            <div className="animate__animated animate__headShake">
              <FormHelperText sx={{ ml: 2 }} error>
                {errors.password.message}
              </FormHelperText>
            </div>
          )}
        </Grid>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid xs={6}>
            <Button
              disabled={isChecking}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Grid>
          <Grid xs={6}>
            <Button
              disabled={isChecking}
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<Google />}
              onClick={startLoginWithGoogle}
            >
              Google
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Link component={LinkRouter} color="primary" to={"./register"}>
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </LayoutStyled>
  );
};
