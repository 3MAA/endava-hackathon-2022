import React from "react";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Articol3 from "/images/Articol3.png";
import { Grid, Typography } from "@material-ui/core";

const Articolul3 = () => {
  return (
    <Layout title="Materiale comune reciclabile">
      <Typography variant="h1" align="center" style={{margin: '1.8em 0 1.2em 0'}} gutterBottom>
      Materiale comune reciclabile
      </Typography>
      <h3 align="left" style={{ margin: "0em 6em" }}>
        Există atât de multe materiale care pot fi reciclate în societatea
        actuală; ar fi nevoie de o carte pentru a intra în detaliu despre
        fiecare. Mai jos, totuși, sunt enumerate câteva dintre cele mai comune
        articole reciclabile pe care le întâlnesc oamenii în viața de zi cu zi.
      </h3>
      <Grid container spacing={1} justify="center">
        <Grid item xs={6} align="center">
          <div>
            <Image
              alt="Articol3"
              align="center"
              src={Articol3}
              width={600}
              height={600}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid item>
            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
              1. Plasticul
            </h2>
            <h3 align="left">
              (Energia economisită prin reciclarea unei singure sticle de
              plastic alimentează un bec de 60 W timp de 6 ore.)
            </h3>
            <h4 align="left">Există 7 tipuri de plastic:</h4>
            <h4 style={{ margin: "0.5em 2em" }}>
              1. PET (polietilen tereftalat): ușor reciclabil, nu se recomandă
              reutilizarea sa
            </h4>
            <h4 style={{ margin: "0.5em 2em" }}>
              2. HDPE (polietilenă de înaltă densitate): reciclabil,
              reutilizabil
            </h4>
            <h4 style={{ margin: "0.5em 2em" }}>
              3. PVC (clorură de polivinil): nu este reciclabil, eliberează
              substanțe toxice în timpul ciclului de viață
            </h4>
            <h4 style={{ margin: "0.5em 2em" }}>
              4. LDPE (polietilenă de densitate mică): uneori reciclabil,
              reutilizabil
            </h4>
            <h4 style={{ margin: "0.5em 2em" }}>
              5. PP (polipropilenă): reciclabil; reutilizabil
            </h4>
            <h4 style={{ margin: "0.5em 2em" }}>
              6. PS (polistiren): în general nu este reciclabil
            </h4>
            <h4 style={{ margin: "0.5em 2em" }}>7. Altele: nu se reciclează</h4>
            <h4 align="left">
              Astfel, se pot recicla sticlele confecționate din PET (apă, suc,
              lapte etc), casoletele transparente, sticle de cosmetice, produse
              de îngrijire și de curățenie, găletușele de iaurt. Ambalajele
              trebuie clătite sau spălate cu apă cu detergent înainte de a fi
              puse în coș, altfel vor contamina și deșeurile din jur. Realizată
              corespunzător, colectarea și reciclarea plasticului poate fi o
              soluție utilă pentru conservarea mediului. Atenție, plasticul nu
              poate fi reciclat la nesfârșit, ci de cel mult 5-10 ori. Își
              pierde proprietățile cu fiecare reciclare și trebuie combinat cu
              material virgin. De aceea, se recomandă alegerea ambalajelor
              confecționate din sticlă sau aluminiu.
            </h4>
          </Grid>
        </Grid>
      </Grid>
      <Grid align="left">
        <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>2. Sticla</h2>
        <h4 align="left">
          (Reciclarea a 1.000 de tone de sticlă creează ușor peste 8 locuri de
          muncă.) Sticla poate fi reciclată la infinit, nu își pierde niciodată
          proprietățile. Acest lucru duce la conservarea resurselor naturale,
          dar și la economii financiare: reciclarea sticlei costă mai puțin
          decât producția sa. Se pot recicla borcanele (fără capac), sticlele
          (de apă, băuturi alcoolice, suc etc), produsele cosmetice din sticlă,
          dar nu și geamuri, oglinzi, porțelan, ceramică, vase rezistente la
          căldură. Toate trebuie să fie curate.
        </h4>
        <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>3. Hârtia</h2>
        <h4 align="left">
          (Prin reciclarea unei tone de hartie, salvati 17 copaci.) Hârtia și
          cartonul pot fi reciclate cu succes cât timp nu sunt murdare de
          grăsimi și resturi alimentare. Capsele, lipiciul care leagă paginile
          și cerneala sunt îndepărtate în cadrul procesului de reciclare.
          Materialul poate fi reciclat de aproximativ 6 ori.
        </h4>
        <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>4. Metalul</h2>
        <h4 align="left">
          La fel ca sticla, metalul poate fi reciclat la nesfârșit. Se acceptă
          dozele de bere și suc, conservele, capacele de borcane, folia de
          aluminiu și alte recipiente curățate și necontaminate. Atenție,
          recipientele de vopsea (de pereți, păr sau pictură) sunt considerate
          contaminate din cauza vopselei.
        </h4>
        <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>5. Lemnul</h2>
        <h4 align="left">
          Lemnul vechi este foarte scump deoarece crapă foarte greu pentru ca e
          deja foarte uscat. Din aceste motive, reciclarea mobilierului prin
          recondiționare este foarte valoroasă și presupune repararea unui
          obiect și repunerea lui în circulație, uneori adaptându-l la
          mobilierul modern. Totodată, înfățișarea mobilei poate fi schimbată
          prin recondiționare, chiar daca e zgâriată sau și-a pierdut luciul.
        </h4>
      </Grid>
    </Layout>
  );
};

export default Articolul3;
