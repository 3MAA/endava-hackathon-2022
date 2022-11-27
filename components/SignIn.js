import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import useForm from "../lib/useForm";
import { CURRENT_USER_QUERY } from "./User";
import { useRouter } from "next/router";
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
import FormDialog from "./layout/FormDialog";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";
import Error from "./ErrorMessage";
import Layout from "./layout/Layout";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DisplayError from "./ErrorMessage";

const theme = createTheme();

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignIn() {
  const router = useRouter();
  const { inputs, handleChange } = useForm({
    email: "",
    password: "",
  });
  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    console.log(inputs);
    const res = await signin();
    console.log(res);
    console.log({ data, loading, error });
    if (res.data && res.data.authenticateUserWithPassword.code != "FAILURE") {
      router.push("/");
    }
    // Send the email and password to the graphqlAPI
  }
  const error =
    data?.authenticateUserWithPassword.__typename ===
    "UserAuthenticationWithPasswordFailure"
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Container>
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
            Logare
          </Typography>
          {<DisplayError error={error} />}
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
                margin: "0.5em",
              }}
              className="button"
            >
              Logare
            </Button>
            <div align=" center">
              <Typography align=" center" variant="subtitle1" component="div">
                Nu ai un cont?
                <Link color="blue" underline="none" href="/inregistrare">
                  {" Înregistrare"}
                </Link>
              </Typography>
            </div>

            <div align=" center" style={{ color: "black" }}>
              <Typography align=" center" variant="subtitle1" component="div">
                Ți-ai uitat parola?{" "}
                <Link color="blue" underline="none" href="/reset">
                  {"Recuperare parola"}
                </Link>
              </Typography>
            </div>

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
