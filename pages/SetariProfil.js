import Layout from "components/layout/Layout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import useMediaQuery from "@mui/material/useMediaQuery";
import Snackbar from "@mui/material/Snackbar";
import Profil from "components/layout/Profil";
import { Grid, Typography, Avatar } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";

const setariProfil = () => {
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
  }));

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickk = () => {
    setOpen(true);
  };

  const handleClosee = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Layout title=" Setări Profil ">
      <Grid container spacing={8}>
        <Grid item>
          <Profil></Profil>
        </Grid>

        <Grid item>
          <Typography variant="h2" align="left">
            Avatar
          </Typography>
          <MenuItem
            sx={{ m: 1, width: "5ch" }}
            hidden
            accept="image/*"
            multiple
            type="file"
          >
            <Avatar />
          </MenuItem>
          Schimbați avatarul!
          <div>
            <TextField
              required
              id="outlined-required"
              label="Nume complet"
              defaultValue=""
              sx={{ m: 1, width: "34ch" }}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined"
              label="Adresa"
              defaultValue=""
              sx={{ m: 1, width: "34ch" }}
            />
          </div>
          <TextField
            id="outlined"
            label="Nr. tel."
            defaultValue=""
            sx={{ m: 1, width: "34ch" }}
          />
          <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
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
              style={{
                color: "#FFFFFF",
                backgroundColor: "rgba(56, 129, 103, 1)",
                padding: "0.5rem",
              }}
              className="button"
              onClick={handleClickOpen}
            >
              Șterge cont
            </Button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Confirmare ștergere cont!"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Doriți să ștergeți acest cont?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  onClick={handleClose}
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
                  href="/"
                  onClick={handleClose}
                  autoFocus
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "rgba(56, 129, 103, 1)",
                    padding: "0.5rem",
                    margin: "0.5rem",
                  }}
                  className="button"
                >
                  Șterge
                </Button>
              </DialogActions>
            </Dialog>
            <Button
              variant="contained"
              onClick={handleClickk}
              style={{
                color: "#FFFFFF",
                backgroundColor: "rgba(56, 129, 103, 1)",
                padding: "0.5rem",
              }}
              className="button"
            >
              Salvează
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={4000}
              onClose={handleClosee}
            >
              <Alert
                onClose={handleClosee}
                severity="success"
                sx={{ width: "100%" }}
              >
                Modificările au fost salvate cu succes!
              </Alert>
            </Snackbar>
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default setariProfil;
