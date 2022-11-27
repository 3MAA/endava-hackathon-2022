import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Form from "./styles/Form";
import useForm from "../lib/useForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@material-ui/core";
import Error from "./ErrorMessage";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
import logo from "/images/Logo.png";

const theme = createTheme();

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
  });
  const [signup, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
      // refectch the currently logged in user
      // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);
    console.log({ data, loading, error });
    resetForm();
    // Send the email and password to the graphqlAPI
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            m: "5rem",
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
          <Error error={error} />

          {data?.sendUserPasswordResetLink === null && (
            <p>Succes! Verifica-ti email-ul pentru link-ul de resetare</p>
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
              Cere resetarea
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
