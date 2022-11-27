import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import Router from "next/router";
import useForm from "../lib/useForm";
import { ALL_PRODUCTS_QUERY } from "./Products";
import { Grid, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Layout from "./layout/Layout";
import React from "react";

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And What types are they
    $name: String!
    $description: String!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm } = useForm({
    image: "",
    name: "",
    description: "",
  });

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  async function handleSubmit(e) {
    console.log(inputs);
    e.preventDefault();
    const res = await createProduct();
    clearForm();
    Router.push({
      pathname: `/anunturi`,
    });
  }

  function handleFileSelected(e) {
    inputs.image = Array.from(e.target.files)[0];
    console.log("files:", inputs.image);
  }

  return (
    <Layout title="Adaugă un anunț">
      <Grid container spacing={2} justify="center">
        <Box
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "70ch",
              display: "flex",
              flexWrap: "wrap",
            },
          }}
          component="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <Typography variant="h1" align="center" gutterBottom>
            Adaugă un anunț
          </Typography>
          <Grid
            spacing={0}
            align="center"
            justify="center"
            style={{ margin: "5em 0" }}
          >
            <Grid
              spacing={0}
              align="center"
              justify="center"
              style={{ margin: "2em 0" }}
            >
              <div align="center">
                <TextField
                  id="name"
                  name="name"
                  placeholder="Adauga un titlu"
                  value={inputs.name}
                  sx={{ m: 1, width: "100ch" }}
                  onChange={handleChange}
                />
              </div>
            </Grid>

            <Grid
              spacing={0}
              align="center"
              justify="center"
              style={{ margin: "2em 0" }}
            >
              <div align="center">
                <TextField
                  id="description"
                  name="description"
                  placeholder="Descriere"
                  value={inputs.description}
                  sx={{ m: 1, width: "100ch" }}
                  onChange={handleChange}
                />
              </div>
            </Grid>

            <Grid container align="center">
              <Button
                variant="outlined"
                fullWidth
                component="label"
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "rgba(56, 129, 103, 1)",
                  padding: "0.5rem",
                }}
              >
                încarcă imagini
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handleFileSelected}
                />
              </Button>
            </Grid>

            <Grid
              container
              fullWidth
              spacing={0}
              justify="center"
              style={{ margin: "2em 0" }}
            >
              <Button
                variant="contained"
                type="submit"
                fullWidth
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "rgba(56, 129, 103, 1)",
                  padding: "0.5rem",
                }}
              >
                Adaugă un anunț
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Layout>
  );
}
