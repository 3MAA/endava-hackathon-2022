import Layout from "components/layout/Layout";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Profil from "components/layout/Profil";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Grid } from "@material-ui/core";

const resetareParola = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Layout title=" Resetare parolă ">
      <Grid container spacing={8}>
        <Grid item>
          <Profil></Profil>
        </Grid>

        <Grid item sx={{ m: 1 }}>
          <div>
            Adăugați parola curentă pentru a schimba parola!
            <div>
              <FormControl sx={{ width: "28ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Parola curentă!
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Parola curentă!"
                />
              </FormControl>
            </div>
          </div>
          <div>
            Adăugați noua parolă!
            <div>
              <FormControl sx={{ width: "28ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Parola nouă!
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Parola nouă!"
                />
              </FormControl>
            </div>
          </div>
          <div>
            Confirmați noua parolă!
            <div>
              <FormControl sx={{ width: "28ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Parola nouă!
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Parola nouă!"
                />
              </FormControl>
            </div>
          </div>
          <Stack direction="row" spacing={10} sx={{ m: 1, width: "100%" }}>
            <Button
              variant="contained"
              style={{
                color: "#FFFFFF",
                backgroundColor: "rgba(56, 129, 103, 1)",
                padding: "0.5rem",
              }}
              className="button"
            >
              Anulează
            </Button>
            <Button
              variant="contained"
              onClick={handleClick}
              className="button"
              style={{
                color: "#FFFFFF",
                backgroundColor: "rgba(56, 129, 103, 1)",
                padding: "0.5rem",
              }}
            >
              Salvează
            </Button>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Parola a fost modificată cu succes!
              </Alert>
            </Snackbar>
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default resetareParola;
