import React from "react";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Articol6 from "/images/Articol6.png";
import { Grid , Typography} from "@material-ui/core";

const Articolul6 = () => {
  return (
    <Layout title="5 informații minimale despre reciclare">
      <Typography variant="h1" align="center" style={{margin: '1.8em 0 1.2em 0'}} gutterBottom>
      5 informații minimale despre reciclare
      </Typography>
      <Grid
        container
        spacing={1}
        justify="center"
      >
        <Grid item xs={6}>
          <div>
            <Image
              alt="Articol6"
              align="center"
              src={Articol6}
              width={600}
              height={600}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid item >
            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
            1. Cel mai reciclat articol din lume
            </h2>
            <h3 align="left">
            Peste 50% din cutiile de aluminiu produse sunt reciclate.
            </h3>
            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
            2. Gospodăriile din Marea Britanie folosesc o mulțime de conserve
            </h2>
            <h3 align="left">
            Fiecare gospodărie din Marea Britanie folosește aproximativ 600 de cutii de oțel pe an.
            </h3>
            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
            3. Sticla poate fi reciclată continuu
            </h2>
            <h3 align="left">
            Sticla poate fi reciclată continuu fără a-și pierde integritatea sau a-i modifica calitatea.
            </h3>
            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
            4. Hârtiile renasc într-o săptămână
            </h2>
            <h3 align="left">
            Ar putea dura doar șapte zile pentru ca reviste și ziare vechi să fie reciclate în altele noi.
            </h3>
            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
            5. Copacii mor
            </h2>
            <h3 align="left">
            Pentru fiecare tonă de ziar reciclat, 17 copaci sunt salvați.
            </h3>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Articolul6;
