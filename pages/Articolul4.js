import React from "react";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Articol4 from "/images/Articol4.png";
import { Grid , Typography} from "@material-ui/core";

const Articolul4 = () => {
  return (
    <Layout title="De ce este bine să reciclăm">
      <Typography variant="h1" align="center" style={{margin: '1.8em 0 1.2em 0'}} gutterBottom>
      De ce este bine să reciclăm
      </Typography>
      <Grid container spacing={10} justify="center">
        <Grid item xs={6}>
          <div>
            <Image
              alt="Articol4"
              align="center"
              src={Articol4}
              width={600}
              height={600}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid item>
            <h3>
              Reciclarea reduce consumul de energie și volumul de emisii.
              Reciclând o conservă de aluminiu puteți economisi 90 % din energia
              necesară pentru a produce o conservă nouă. Dacă în loc să aruncați
              la gunoi 1 kg de hârtie, îl reciclați, evitați eliberarea în
              atmosferă a aproximativ 1 kg de emisii de CO2 și de metan. Aflați
              ce tipuri de deșeuri pot fi reciclate în zona dumneavoastră. Nu
              aruncați sticla, hârtia, cartoanele, plasticul și conservele
              împreună cu gunoiul menajer. Instalațiile de reciclare pot trata
              acum tot mai multe tipuri de plastic – verificați la nivel local.
              Nu aruncați la gunoi dispozitivele electronice. Produsele
              electronice sunt fabricate din materiale și resurse valoroase,
              care pot fi reciclate. Metalele, materialele plastice, sticla,
              toate acestea necesită multă energie pentru extracție și
              prelucrare. Duceți-le la un punct local de colectare sau la
              comerciantul de la care le-ați cumpărat. Reciclați bateria de la
              mașină când aveți nevoie de una nouă. Și anvelopele vechi pot fi
              reciclate.
            </h3>
            <h1>
              Compostați! Deșeurile organice – cele de la fructe și legume,
              cojile de ouă sau zațul de cafea – sunt mult mai folositoare dacă
              sunt compostate decât dacă ajung la groapa de gunoi.
            </h1>
            <h3>
              Într-o cutie sau grămadă de compost, expuse la aer, deșeurile se
              descompun și se transformă în îngrășământ natural. Într-un depozit
              de deșeuri, unde nu este aer, deșeurile fermentează și emit metan,
              gaz cu un puternic efect de seră.
            </h3>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Articolul4;
