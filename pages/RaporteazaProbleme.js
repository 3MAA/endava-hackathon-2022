import Layout from "components/layout/Layout";
import { Grid, Typography, Avatar } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import React, { useReducer } from "react";
import DropZone from "components/layout/DropZone";

const currencies = [
  {
    value: "Foarte urgent",
    label: "Foarte urgent",
  },
  {
    value: "Urgent",
    label: "Urgent",
  },
  {
    value: "Mai poate aștepta",
    label: "Mai poate aștepta",
  },
  {
    value: "Nu e grabă",
    label: "Nu e grabă",
  },
];

const Raportează = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });
  const [currency, setCurrency] = React.useState("EUR");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Layout
      title="Raportează o problemă"
      description="Nu fi indiferent la probleme."
    >
      <Grid container spacing={2} justify="center">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "70ch",
              display: "flex",
              flexWrap: "wrap",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h1" align="center" gutterBottom>
            Raportează o problemă
          </Typography>
          <Grid align="center" justify="center">
            <Grid align="center" justify="center">
              <div align="center">
                <TextField
                  required
                  id="outlined-required"
                  label="Ce problemă ați identificat"
                  defaultValue="Ce problemă ați identificat"
                  sx={{ m: 1, width: "100ch" }}
                />
              </div>
            </Grid>

            <Grid align="center" justify="center">
              <div align="center">
                <TextField
                  required
                  id="outlined-required"
                  label="Adresa unde este problema"
                  defaultValue="Adresa unde este problema"
                  sx={{ m: 1, width: "100ch" }}
                />
              </div>
            </Grid>

            <Grid spacing={0} align="center" justify="center">
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Gravitatea problemei"
                  value={currency}
                  onChange={handleChange}
                  helperText="Selectează opțiunea potrivită"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <div> {option.label} </div>
                    </MenuItem>
                  ))}
                  <br></br>
                </TextField>
              </div>
            </Grid>

            <Grid container>
              <DropZone data={data} dispatch={dispatch} />
            </Grid>

            <Grid container justify="center">
              <Button
                style={{
                  width: " 69ch",
                  height: "8ch",
                  color: "#FFFFFF",
                  backgroundColor: "rgba(56, 129, 103, 1)",
                  padding: "0.5rem",
                }}
                variant="outlined"
                className="button"
              >
                Adaugă problema
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Raportează;
