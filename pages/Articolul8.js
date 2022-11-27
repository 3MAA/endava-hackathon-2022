import React from "react";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Articol8 from "/images/Articol8.png";
import { Grid, Typography } from "@material-ui/core";

const Articolul8 = () => {
  return (
    <Layout title="Beneficii economice">
      <Typography variant="h1" align="center" style={{margin: '1.8em 0 1.2em 0'}} gutterBottom>
      Beneficii economice
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item xs={6} align="center">
          <div>
            <Image
              alt="Articol8"
              align="center"
              src={Articol8}
              width={600}
              height={600}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid item>
            <h2 style={{ color: "#388167" }} align="center">
              1.
            </h2>
            <h3>
              Reciclarea contribuie la o economie circulară în care totul este
              mai degrabă o resursă decât un deșeu. Programele de reciclare
              desfășurate în mod corespunzător costă guvernului,
              contribuabililor și proprietarilor de afaceri mai puțini bani
              decât programele de deșeuri.
            </h3>
            <h2 style={{ color: "#388167" }} align="center">
              2.
            </h2>
            <h3>
              Oamenii pot chiar câștiga bani colectând materiale aprobate la o
              unitate de reciclare din apropiere care va plăti pentru produs.
            </h3>
            <h2 style={{ color: "#388167" }} align="center">
              3.
            </h2>
            <h3>
              Este mai ieftin decât colectarea și eliminarea deșeurilor. Deci,
              cu cât reciclezi mai mult și cu cât pui mai puțin la coșul de
              gunoi, cu atât se economisesc mai mulți bani pentru a fi folosiți
              pentru gospodării, afaceri și servicii publice locale.
            </h3>
            <h2 style={{ color: "#388167" }} align="center">
              4.
            </h2>
            <h3>
              Când materialele sunt reciclate la nivel local, îți stimulează
              economia locală prin crearea mai multor locuri de muncă în
              procesul de reciclare și creează un viitor mai bun pentru toți.
              Eforturile dvs. în reciclare creează, de asemenea, noi afaceri,
              cum ar fi colectarea, transportul, procesarea, fabricarea,
              ambalarea și vânzarea produselor reciclate, deschizând calea către
              un viitor mai ecologic.
            </h3>
            <h2 style={{ color: "#388167" }} align="center">
              5.
            </h2>
            <h3>
              Reciclarea poate stimula industria turistică a țărilor. Un mediu
              curat este primitor și ar atrage pasionații de mediu din întreaga
              lume. Acest aflux de turiști ar contribui și la rezerva valutară a
              unei țări.
            </h3>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Articolul8;
