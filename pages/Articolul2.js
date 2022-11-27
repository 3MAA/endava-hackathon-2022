import React from "react";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Articol2 from "/images/Articol2.png";
import { Grid, Typography } from "@material-ui/core";

const Articolul2 = () => {
  return (
    <Layout title="Pași pentru reciclare">
      <Typography variant="h1" align="center" style={{margin: '1.8em 0 1.2em 0'}} gutterBottom>
      3 pași importanți ai reciclării
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item xs={6}>
          <div>
            <Image
              alt="Articol2"
              align="center"
              src={Articol2}
              width={600}
              height={600}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid item>
            <h3 align="left">
              Reciclarea include cei trei pași de mai jos, care creează o buclă
              continuă, reprezentată de simbolul familiar de reciclare.
            </h3>
            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
              Pasul 1: Colectare și procesare
            </h2>
            <h4 align="left">
              Există mai multe metode de colectare a materialelor reciclabile,
              inclusiv colectarea pe margine, centrele de predare și programele
              de depunere sau rambursare. După colectare, materialele
              reciclabile sunt trimise la o unitate de recuperare pentru a fi
              sortate, curățate și prelucrate în materiale care pot fi utilizate
              în producție. Materialele reciclabile sunt cumpărate și vândute la
              fel cum ar fi materiile prime, iar prețurile cresc și scad în
              funcție de cerere și oferta din România și din lume.
            </h4>
            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
              Pasul 2: Fabricare
            </h2>
            <h4 align="left">
              Din ce în ce mai multe dintre produsele de astăzi sunt fabricate
              cu conținut reciclat. Articolele de uz casnic obișnuite care
              conțin materiale reciclate includ următoarele: Ziare și prosoape
              de hârtie; Recipiente pentru băuturi răcoritoare din aluminiu,
              plastic și sticlă; Cutii de oțel; Sticle de plastic pentru
              detergent de rufe. Materialele reciclate sunt, de asemenea,
              folosite în moduri noi, cum ar fi sticla recuperată în asfalt
              pentru asfaltarea drumurilor sau plastic recuperat în covoare și
              bănci de parc.
            </h4>
            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
              Pasul 3: Achiziționarea de produse noi realizate din materiale
              reciclate
            </h2>
            <h4 align="left">
              Ajutați la închiderea circuitului de reciclare cumpărând produse
              noi fabricate din materiale reciclate. Există mii de produse care
              conțin conținut reciclat. Amintiți-vă că nu toate tipurile de
              materiale reciclabile pot fi colectate în comunitatea dvs., așa că
              asigurați-vă că consultați programul local de reciclare înainte de
              a cumpăra. Unele dintre produsele comune pe care le puteți găsi și
              care pot fi realizate cu conținut reciclat includ următoarele:
              cutii de aluminiu, barele de protecție auto, covoare, cutii cu
              cereale, cărți de benzi desenate, cutii cu ouă, recipiente din
              sticlă, sticle de detergent de rufe, ulei de motor, șervețele de
              hârtie, produse din oțel, saci de gunoi.
            </h4>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Articolul2;
