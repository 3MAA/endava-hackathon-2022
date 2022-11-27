import React from "react";
import Layout from "components/layout/Layout";
import { Grid } from "@material-ui/core";
import SignUp from "../components/SignUp";

const Inregistrare = () => {
  return (
    <Layout title="Logare" description="Logare">
      <Grid container rowSpacing={1} justify="center">
        <Grid item xs={6}>
          <SignUp />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Inregistrare;
