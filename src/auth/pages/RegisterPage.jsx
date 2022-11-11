import { useForm } from "react-hook-form";
import { Link as LinkRouter } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import "animate.css";

import { LayoutStyled } from "./LayoutStyled";
import { Button, FormHelperText, Link, TextField } from "@mui/material";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <LayoutStyled title={"Register"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid sx={{ mt: 3, mb: 2 }}>
          <TextField
            fullWidth
            label="name"
            placeholder="user"
            error={!!errors.name}
            type="text"
            {...register("name", {
              required: "El nombre es obligatorio",
            })}
          ></TextField>
          {errors?.name && (
            <div className="animate__animated animate__headShake">
              <FormHelperText sx={{ ml: 2 }} error>
                {errors.name.message}
              </FormHelperText>
            </div>
          )}
        </Grid>
        <Grid sx={{ mb: 2 }}>
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
            placeholder="password"
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

        <Grid container sx={{ mt: 3 }}>
          <Button fullWidth type="submit" variant="contained" color="primary">
            Sign In
          </Button>
        </Grid>
      </form>

      <Grid container justifyContent="end">
        <Link component={LinkRouter} color="primary" to={"/auth/login"}>
          ¿Ya tienes cuenta?
        </Link>
      </Grid>
    </LayoutStyled>
  );
};
