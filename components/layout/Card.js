import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ButtonBase from "@mui/material/ButtonBase";
import photo from "/images/photo_icon.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 4,
        margin: "auto",
        maxWidth: 600,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Image src={photo} />
          </ButtonBase>
        </Grid>

        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Numele celui care a postat anunțul
          </Typography>
          <Typography variant="body2" gutterBottom>
            Nume produs căutat/donat
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Detalii produs
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ cursor: "pointer" }} variant="body2">
            Data postării | Status anunț | Categorie anunț | Vezi detalii anunț
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
