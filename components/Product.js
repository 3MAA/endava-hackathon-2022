import Link from "next/link";
import DeleteProduct from "./DeleteProduct";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Product({ product }) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 800,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 300, height: 300 }}>
            <Img
              src={product?.photo?.image?.publicUrlTransformed}
              alt={product.name}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h2" component="h3">
                {product.name}{" "}
                <Link href={`/product/${product.id}`}>(link)</Link>
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ cursor: "pointer" }}
                variant="body2"
              ></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
