import React from "react";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Articol1 from "/images/Articol1.png";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Grid, Typography } from "@material-ui/core";

const PrimulArticol = () => {
  return (
    <Layout title=" Ce este reciclarea?">

      <Typography variant="h1" align="center" style={{margin: '2.2em 0 1.2em 0'}} gutterBottom>
      Ce este reciclarea?
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item xs={6}>
          <div>
            <Image
              alt="Articol1"
              align="center"
              src={Articol1}
              width={600}
              height={600}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid item>
            <h3 align="left">
              În timp ce reciclarea este bună din multe puncte de vedere, scopul
              final al acesteia este de a-i determina pe oameni să prevină
              risipa în primul rând.
            </h3>
            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
              1. Ce este reciclarea?
            </h2>

            <h4 align="left">
              Reciclarea este procesul de colectare și procesare a materialelor
              care altfel ar fi aruncate ca gunoi și de transformare în produse
              noi. Reciclarea poate aduce beneficii comunității, economiei și
              mediului.
            </h4>

            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
              2. Beneficiile reciclarii pentru mediu
            </h2>

            <h3 align="left" style={{ margin: "1em 0em" }}>
              <DoneOutlineIcon style={{ margin: "0em 0em" }}></DoneOutlineIcon>
              Reduce cantitatea de deșeuri trimise la gropile de gunoi și
              incineratoare.
            </h3>

            <h3 align="left" style={{ margin: "1em 0em" }}>
              <DoneOutlineIcon style={{ margin: "0em 0em" }}></DoneOutlineIcon>
              recicland, poluantii eliberati de obicei in apa si aer prin
              depunerea deseurilor la gropile de gunoi, se diminueaza
              considerabil
            </h3>

            <h3 align="left" style={{ margin: "1em 0em" }}>
              <DoneOutlineIcon style={{ margin: "0em 0em" }}></DoneOutlineIcon>
              Conservă resursele naturale precum lemnul, apa și mineralele.
            </h3>
            <h3 align="left" style={{ margin: "1em 0em" }}>
              <DoneOutlineIcon style={{ margin: "0em 0em" }}></DoneOutlineIcon>
              Crește securitatea economică prin accesarea unei surse interne de
              materiale.
            </h3>
            <h3 align="left" style={{ margin: "1em 0em" }}>
              <DoneOutlineIcon style={{ margin: "0em 0em" }}></DoneOutlineIcon>
              Previne poluarea prin reducerea nevoii de a colecta noi materii
              prime.
            </h3>
            <h3 align="left" style={{ margin: "1em 0em" }}>
              <DoneOutlineIcon style={{ margin: "0em 0em" }}></DoneOutlineIcon>
              Economisește energie.
            </h3>
            <h3 align="left" style={{ margin: "1em 0em" }}>
              <DoneOutlineIcon style={{ margin: "0em 0em" }}></DoneOutlineIcon>
              Sprijină producția românească și conservă resurse valoroase.
            </h3>
            <h3 align="left" style={{ margin: "1em 0em" }}>
              <DoneOutlineIcon style={{ margin: "0em 0em" }}></DoneOutlineIcon>
              Ajută la crearea de locuri de muncă în industria de reciclare și
              de fabricație din România.
            </h3>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PrimulArticol;
