import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import useForm from "../lib/useForm";
import Image from "next/image";
import logo from "/images/Logo.png";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Error from "./ErrorMessage";
import { CssBaseline } from "@material-ui/core";
const theme = createTheme();

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

export default function Reset({ token }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
    token,
  });
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });
  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;
  console.log(error);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await reset().catch(console.error);
    console.log(res);
    console.log({ data, loading, error });
    resetForm();
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <Image
              alt="Logo"
              align="center"
              src={logo}
              width={80}
              height={80}
            />
          </div>
          <Typography component="h1" variant="h5">
            Resetează parola
          </Typography>
          <Error error={error || successfulError} />

          {data?.redeemUserPasswordResetToken === null && (
            <>
              <p>Success! Acum te poți autentifica</p>
              <Link color="blue" underline="none" href="/signin">
                {"Logare"}
              </Link>
            </>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ m: 1 }}
          >
            <TextField
              required
              fullWidth
              id="email"
              label="Adresa de mail"
              type="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={inputs.email}
              onChange={handleChange}
              sx={{ m: 1 }}
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Parola"
              type="password"
              id="password"
              autoComplete="current-password"
              value={inputs.password}
              onChange={handleChange}
              sx={{ m: 1 }}
            />
            <Button
              type="submit"
              required
              fullWidth
              variant="contained"
              size="large"
              style={{
                color: "#FFFFFF",
                backgroundColor: "rgba(56, 129, 103, 1)",
                padding: "0.5rem",
                margin: "0.5rem",
              }}
              className="button"
            >
              Resetează
            </Button>
            <Grid container mt>
              <Grid item xs></Grid>
              <Grid item></Grid>
            </Grid>
          </Box>

          <Typography variant="h6" align="center" component="div"></Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
