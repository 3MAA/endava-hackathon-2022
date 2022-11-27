import { useQuery } from "@apollo/client";
import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import gql from "graphql-tag";
import styled from "styled-components";
import DisplayError from "./ErrorMessage";
import Layout from "./layout/Layout";
import * as React from "react";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      description
      id
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Product } = data;
  console.log(Product);
  return (
    <Layout title={Product.name} description="Logare">
      <br></br>
      <br></br>
      <Paper
        sx={{
          top: 100,
          p: 2,
          maxWidth: 600,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 300, height: 300 }}>
              <Img
                src={Product.photo.image.publicUrlTransformed}
                alt={Product.photo.altText}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h2" component="h3">
                  {Product.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {Product.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  );
}
