import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Form from "./styles/Form";
import useForm from "../lib/useForm";
import { CURRENT_USER_QUERY } from "./User";
import Error from "./ErrorMessage";
import { useRouter } from "next/router";
import Layout from "./layout/Layout";
import Image from "next/image";
import logo from "/images/Logo.png";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormDialog from "./layout/FormDialog";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";

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
    router.push("/");
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
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            mb: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "0 18em" }}>
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

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={inputs.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={inputs.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              margin="normal"
              required
              fullWidth
              variant="contained"
              size="large"
            >
              Sign In
            </Button>
            <div align=" center" style={{ margin: "0em 1em", color: "black" }}>
              <Typography align=" center" variant="subtitle1" component="div">
                Ți-ai uitat parola? <FormDialog></FormDialog>
              </Typography>
            </div>

            <div style={{ margin: "0.8em 18.5em" }}>
              <Typography variant="h6" component="div">
                SAU
              </Typography>{" "}
            </div>

            <div className="form-group p-4">
              <GoogleLoginButton onClick={() => alert("Hello")} />
            </div>
            <div className="form-group p-4">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>
            <div className="form-group p-4">
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div>

            <div align=" center" style={{ margin: "1em 1em", color: "black" }}>
              <Typography align=" center" variant="subtitle1" component="div">
                Nu ai un cont?{" "}
                <Link color="blue" underline="none" href="/inregistrare">
                  {"Înregistrare"}
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