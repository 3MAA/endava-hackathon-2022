import Layout from "components/layout/Layout";
import Image from "next/image";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Campania1 from "/images/Campania1.png";
import Campania2 from "/images/Campania2.png";
import Campania3 from "/images/Campania3.png";
const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const CampaniiReciclare = () => {
  const classes = useStyles();

  return (
    <Layout
      title="Campanii de reciclare"
      description="Aici găsești campanii cu si despre reciclare. Implică-te!"
    >
      <Typography
        variant="h1"
        align="center"
        style={{ margin: "1.5em 0 1.5em 0" }}
        gutterBottom
      >
        Campanii de reciclare
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <Image
            alt="Campania2"
            align="center"
            src={Campania2}
            width={950}
            height={788}
          />
        </Grid>

        <Grid item xs={6}>
          <Grid align="left">
            <h1 style={{ color: "#388167" }}>
              Luptă pentru un viitor durabil!
            </h1>

            <h2>
              4 anvelope reciclate = 1 cupon de 20% reducere ce poate fi folosit
              la orice magazin de piese auto din Iași
            </h2>
            <h4>
              În calitate de cel mai mare reciclator din Iași, viziunea noastră
              este că toate anvelopele scoase din uz ar trebui reciclate în cel
              mai avantajos mod din punct de vedere ecologic și economic.
              Anvelopele reciclate vor fi trimise la fabrici unde se fac
              cauciucuri. Reciclarea materialelor prin această metodă
              economisește 1-2 tone de CO2 pe tona de resturi de anvelope.
            </h4>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ margin: "1em 0" }} justify="center">
        <Grid item xs={6}>
          <Image
            alt="Campania1"
            align="center"
            src={Campania1}
            width={900}
            height={740}
          />
        </Grid>

        <Grid item xs={6}>
          <Grid align="left">
            <h1 style={{ color: "#388167" }}>
              Orice bec ars merită să ajungă într-un Colț Verde!
            </h1>
            <h4>
              PERIOADA DE DESFĂȘURARE: 15 octombrie 2022 - 14 octombrie 2023 sau
              în limita fondului de premiere disponibil (62.000 de lei)
            </h4>
            <h2>
              Vino cu 7 becuri/tuburi utilizate și primești în schimb 3 becuri
              tip lumânare noi.
            </h2>
            <h4>
              Becurile LED în formă de lumânare pe care le primești în schimbul
              celor arse au soclu tip E14 și o putere de 3,6 W, cu clasa de
              eficiență energetică A+. Culoarea luminii este alb cald, iar
              durata de funcționare a unui bec este de circa 15.000 de ore.
            </h4>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <Image
            alt="Campania3"
            align="center"
            src={Campania3}
            width={950}
            height={788}
          />
        </Grid>

        <Grid item xs={6}>
          <Grid align="left">
            <h1 style={{ color: "#388167" }}>Energie pentru echilibru</h1>

            <h4>
              Predă deșeurile în perioada 15.09.2022 – 30.11.2022 și pentru
              fiecare 20 kg deșeuri de surse de iluminat sau 50 kg de deșeuri de
              echipamente electrice și electronice, ai șansa pentru a câștiga o
              Lanternă tactică reîncărcabilă de 5W.
            </h4>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CampaniiReciclare;
