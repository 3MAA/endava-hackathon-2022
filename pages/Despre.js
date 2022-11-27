import React from "react";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Despre from "/images/Despre.png";
import { Grid, Typography } from "@material-ui/core";

const DesprePage = () => {
  return (
    <Layout title="Despre">
      <Grid style={{ margin: "3em 0 4em 0" }} align="center">
        <Typography variant="h1">Vrei să ne cunoști mai bine?</Typography>
        <Typography variant="h1">
          Descoperă aici cum a luat naștere acest proiect și care sunt
          intențiile noastre.
        </Typography>
      </Grid>
      <Grid container spacing={1} justify="center">
        <Grid item xs={6}>
          <h1>
            Ne dorim să facem planeta un loc mai verde pentru o viață mai
            sanatoasă.
          </h1>
          <h3>
            Avem nevoie de oameni dedicați! Vin-o în echipa noastră și dăruiește
            obiecte reciclabile altor persoane sau caută produsele tale de
            interes, vezi cele mai apropiate puncte de reciclare față de tine și
            fii cu ochii pe campaniile de reciclare pentru a câștiga premii.
          </h3>
        </Grid>
        <Grid item xs={6}>
          <Image
            alt="Despre"
            align="center"
            src={Despre}
            width={950}
            height={788}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default DesprePage;
