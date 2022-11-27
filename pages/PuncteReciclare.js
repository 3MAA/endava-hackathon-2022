import Layout from "components/layout/Layout";
import { Grid, Typography } from "@material-ui/core";
import Map from "components/Map.js";
import Lista from "components/layout/ListaFirme";
import Button from "@mui/material/Button";

const PuncteReciclare = () => {
  return (
    <Layout title=" Puncte de reciclare ">
      <Typography
        variant="h1"
        align="center"
        style={{ margin: "1.5em 0 1.5em 0" }}
        gutterBottom
      >
        Puncte de reciclare
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            style={{
              color: "#FFFFFF",
              backgroundColor: "rgba(56, 129, 103, 1)",
              padding: "0.5rem",
              margin: "0 0 2em 0",
            }}
            href="/myfile.html"
          >
            Afla mai multe informatii despre punctele de reciclare
          </Button>
          <Map />
        </Grid>
        <Grid item style={{ margin: "4em 0 0 0" }}>
          <Lista></Lista>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PuncteReciclare;
