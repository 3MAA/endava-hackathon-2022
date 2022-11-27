import Layout from "components/layout/Layout";
import { Typography } from "@material-ui/core";
import Articole from "components/layout/Articolele";

const Informeaza = () => {
  return (
    <Layout
      title="Informații"
      description="Aici găsești cele mai utile informații despre reciclare"
    >
      <Typography
        variant="h1"
        align="center"
        style={{ margin: "1.5em 0 1.5em 0" }}
        gutterBottom
      >
        Află cum să reciclezi corect
      </Typography>

      <Articole></Articole>
    </Layout>
  );
};

export default Informeaza;
