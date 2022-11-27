import Layout from "components/layout/Layout";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import * as React from "react";
import Profil from "components/layout/Profil";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const setariNotificari = () => {
  const [state, setState] = React.useState({
    a: false,
    b: false,
    c: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
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
    <Layout title=" Setări Notificări ">
      <Grid container spacing={8}>
        <Grid item>
          <Profil></Profil>
        </Grid>

        <Grid item>
          <FormControl component="fieldset" variant="standard">
            <FormLabel
              style={{ color: "#388167" }}
              component="legend"
              variant="h2"
            >
              Notificări
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    style={{ color: "#388167" }}
                    checked={state.a}
                    onChange={handleChange}
                    name="a"
                  />
                }
                label="Email"
              />
              <FormHelperText>
                Veți fii anunțat prin email atunci când se postează un anunț
                nou!
              </FormHelperText>
              <FormControlLabel
                control={
                  <Switch
                    style={{ color: "#388167" }}
                    checked={state.b}
                    onChange={handleChange}
                    name="b"
                  />
                }
                label="Anunțuri donații"
              />
              <FormHelperText>
                Veți primi noi informații în legătură cu anunțurile despre
                donații!
              </FormHelperText>
              <FormControlLabel
                control={
                  <Switch
                    style={{ color: "#388167" }}
                    checked={state.c}
                    onChange={handleChange}
                    name="c"
                  />
                }
                label="Anunțuri campanii"
              />
              <FormHelperText>
                Veți primi noi informații în legătură cu anunțurile despre
                campanii!
              </FormHelperText>
            </FormGroup>
          </FormControl>

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
              style={{
                margin: "0 0 0 14rem ",
                color: "#FFFFFF",
                backgroundColor: "rgba(56, 129, 103, 1)",
                padding: "0.5rem",
              }}
              className="button"
            >
              Salvează
            </Button>

            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Notificările au fost salvate cu succes!
              </Alert>
            </Snackbar>
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default setariNotificari;
