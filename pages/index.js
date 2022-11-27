import Layout from "components/layout/Layout";
import CarouselComponent from "components/layout/Carusel";
import { Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import Articole from "components/layout/Articolele";
const About = () => {
  return (
    <Layout
      title="Go green"
      description="Echipa Go Green își dorește o țără mai frumoasă"
    >
      <CarouselComponent></CarouselComponent>

      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <h1 className="text-xl mb-1 font-semibold">
            Ne dorim să facem planeta un loc mai verde pentru o viață mai
            sanatoasă.
          </h1>
          <h3 className="text-xl mb-1 font-semibold">
            Avem nevoie de oameni dedicați! Vin-o în echipa noastră și dăruiește
            obiecte reciclabile altor persoane sau caută produsele tale de
            interes, vezi cele mai apropiate puncte de reciclare față de tine și
            fii cu ochii pe campaniile de reciclare pentru a câștiga premii.
          </h3>
          <Button
            style={{
              color: "#FFFFFF",
              backgroundColor: "rgba(56, 129, 103, 1)",
              padding: "0.5rem",
            }}
            className="button"
            href="/inregistrare"
            variant="outlined"
          >
            Înregistrează-te
          </Button>
        </Grid>
        <Grid item xs={6.5}>
          <h3 className="text-xl mb-1 font-semibold">
            Tu reciclezi, firmele te premiază. Află despre campaniile de
            reciclare.{" "}
          </h3>
          <Button
            href="/campaniiReciclare"
            style={{
              color: "#FFFFFF",
              backgroundColor: "rgba(56, 129, 103, 1)",
              padding: "0.5rem",
            }}
            className="button"
            variant="outlined"
          >
            Campanii active
          </Button>
          <h3 className="text-xl mb-1 font-semibold">
            Află unde sunt cele mai apropiate puncte de colectare.
          </h3>
          <Button
            variant="outlined"
            href="/puncteReciclare"
            style={{
              color: "#FFFFFF",
              backgroundColor: "rgba(56, 129, 103, 1)",
              padding: "0.5rem",
            }}
            className="button"
          >
            Puncte de colectare
          </Button>
          <h3 className="text-xl mb-1 font-semibold">
            Pune un anunț sau colectează produsele oferite de alte persoane.
          </h3>
          <Button
            variant="outlined"
            href="/anunturi"
            style={{
              color: "#FFFFFF",
              backgroundColor: "rgba(56, 129, 103, 1)",
              padding: "0.5rem",
            }}
            className="button"
          >
            Anunțuri de produse
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} justify="center">
        <h1 style={{ margin: "1.8em 0 1.5em 0" }}>
          Fii la curent cu cele mai actuale articole de informare
        </h1>
      </Grid>

      <div>
        <Articole></Articole>
      </div>
    </Layout>
  );
};

export default About;
