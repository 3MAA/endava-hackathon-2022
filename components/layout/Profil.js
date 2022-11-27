import { Grid, Typography, Avatar } from "@material-ui/core";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
export default function Profil() {
  return (
    <Grid>
      <Typography variant="h1" align="left" gutterBottom>
        <MenuItem>
          <Avatar />
        </MenuItem>
        Setări Cont / Profil
      </Typography>
      <div>
        <Button variant="h2" href="/setariProfil">
          Profil
        </Button>
      </div>
      <div>
        <Button variant="h2" href="/resetareParola">
          Parolă
        </Button>
      </div>
      <div>
        <Button variant="h2" href="/setariNotificari">
          Notificări
        </Button>
      </div>
    </Grid>
  );
}
