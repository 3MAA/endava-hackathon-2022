import React from "react";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Articol5 from "/images/Articol5.png";
import { Grid , Typography} from "@material-ui/core";

const Articolul5 = () => {
  return (
    <Layout title="Ziua Globală a reciclării">
      <Typography variant="h1" align="center" style={{margin: '1.8em 0 1.2em 0'}} gutterBottom>
      Ziua Globală a reciclării
      </Typography>
      <Grid container spacing={10} justify="center">
        <Grid item xs={6}>
          <div>
            <Image
              alt="Articol5"
              align="center"
              src={Articol5}
              width={600}
              height={600}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <h2>
            Sărbătorită pe 18 martie în fiecare an, este o inițiativă de
            reciclare care ne încurajează să privim gunoiul într-o nouă lumină.
          </h2>
          <h3>
            Există mai multe modalități de reciclare care permit unor materiale
            să fie reutilizate de mai multe ori. Reciclarea este excelentă
            pentru noi și pentru mediu, deoarece reduce energia pe care o
            folosim, îmbunătățește calitatea apei și a aerului pe care îl
            respirăm și combate schimbările climatice. De asemenea, reduce
            utilizarea de noi materii prime pentru a crea produse noi -
            economisind bani și resurse naturale. Ziarele, sticlele de apă din
            plastic, cutiile de sifon, cutiile de cereale și cutiile de lapte
            sunt câteva dintre articolele comune de zi cu zi reciclabile. Dacă
            depunem efort în reciclarea articolelor pe care de obicei le
            aruncăm, putem avea un impact mai profund asupra pământului și
            vieții noastre.
          </h3>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Articolul5;
