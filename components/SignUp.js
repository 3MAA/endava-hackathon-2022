import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import useForm from "../lib/useForm";
import Image from "next/image";
import logo from "/images/Logo.png";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import DisplayError from "./ErrorMessage";

const theme = createTheme();

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    name: "",
    password: "",
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await signup().catch(console.error);
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
            Înregistrare
          </Typography>

          {<DisplayError error={error}></DisplayError>}
          {data?.createUser && (
            <h3>
              Te-ai inregistrat cu {data.createUser.email} - Acum poti intra in
              contul tau!
            </h3>
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
              id="name"
              label="Nume complet"
              name="name"
              autoComplete="name"
              autoFocus
              value={inputs.name}
              onChange={handleChange}
              sx={{ m: 1 }}
            />
            <TextField
              required
              fullWidth
              id="email"
              label="Adresa de mail"
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
              Înregistrare
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
