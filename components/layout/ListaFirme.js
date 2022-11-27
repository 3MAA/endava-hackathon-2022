import {Grid} from "@material-ui/core";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
export default function Lista() {
  return (
    <Grid>
      <List>
        <ListItem>
          <ListItemText primary="Firme de transport" />
        </ListItem>

        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Firma1" secondary="Telefon: 07xx xxx xxx" />
        </ListItem>

        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Firma2" secondary="Telefon: 07xx xxx xxx" />
        </ListItem>

        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Firma3" secondary="Telefon: 07xx xxx xxx" />
        </ListItem>

        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Firma4" secondary="Telefon: 07xx xxx xxx" />
        </ListItem>
      </List>
    </Grid>
  );
}
