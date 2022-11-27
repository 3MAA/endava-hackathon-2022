import React from "react";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Articol7 from "/images/Articol7.png";
import { Grid, Typography } from "@material-ui/core";

const Articolul7 = () => {
  return (
    <Layout title="Beneficiile reciclării asupra mediului înconjurător">
      <Typography variant="h1" align="center" style={{margin: '1.8em 0 1.2em 0'}} gutterBottom>
      Beneficiile reciclării asupra mediului înconjurător
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item xs={6}>
          <div>
            <Image
              alt="Articol7"
              align="center"
              src={Articol7}
              width={600}
              height={600}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid item>
            <h2 style={{ color: "#388167" }} align="center">1.</h2>
            <h3>
              Prin reciclare, oamenii pot împiedica milioane de tone de
              materiale să intre în gropile de gunoi, economisind spațiu pentru
              gunoiul care nu poate fi reutilizat. Gropile de gunoi nu doar
              poluează mediul înconjurător, ci și îngreunează frumusețea
              orașului.
            </h3>
            <h2 style={{ color: "#388167" }} align="center">2.</h2>
            <h3>
              Reciclarea reduce nevoia de extracție (exploatare, exploatare
              în cariere și exploatare forestieră), rafinare și prelucrare a
              materiilor prime, toate acestea creând o poluare substanțială a
              aerului și apei. Poluanții care sunt eliberați în aer și apă pot
              fi reduse foarte mult cu o creștere a reciclării.
            </h3>
            <h2 style={{ color: "#388167" }} align="center">3.</h2>
            <h3>
              Deoarece reciclarea economisește energie, reduce și emisiile de
              gaze cu efect de seră, ceea ce ajută la combaterea schimbărilor
              climatice.
            </h3>
            <h2 style={{ color: "#388167" }} align="center">4.</h2>
            <h3>
              Utilizarea materialelor reciclate în procesul de fabricație
              utilizează mult mai puțină energie decât cea necesară pentru
              producerea de noi produse din materii prime și în comparație cu
              toate costurile asociate, inclusiv transportul etc., deoarece
              acestea sunt materiale pregătite pentru industrie. Reduce foarte
              mult cantitatea de energie utilizată zilnic, nefiind nevoie să
              producă noi materiale.
            </h3>
            <h2 style={{ color: "#388167" }} align="center">5.</h2>
            <h3>
              Când reciclăm, materialele uzate sunt transformate în produse
              noi, reducând nevoia de a consuma resurse naturale. Dacă
              materialele folosite nu sunt reciclate, se realizează produse noi
              prin extragerea materiei prime proaspete de pe Pământ, prin
              minerit și silvicultură. Reciclarea ajută la conservarea
              resurselor naturale ale Pământului, cum ar fi materii prime,
              minerale, copaci etc. Protejează habitatele naturale pentru viitor
              și conservă resursele naturale pentru generațiile viitoare.
            </h3>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Articolul7;
