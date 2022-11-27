import { useQuery, ApolloClient, InMemoryCache } from "@apollo/client";
import gql from "graphql-tag";
import Product from "./Product";
import { Grid } from "@material-ui/core";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      xs={12}
      spacing={1}
      row-spacing={3}
    >
      {data.allProducts.map((product) => (
        <Grid item xs={6}>
          <Product key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
