import Layout from "components/layout/Layout";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Products from "../components/Products";
import { Grid, Typography } from "@material-ui/core";

const Anunturi = () => {
  return (
    <Layout title="Anunțuri" description="Unii donează, unii caută donatori.">
      <Typography
        style={{ margin: "2em 0 1em 0" }}
        align="center"
        variant="h1"
        gutterBottom
      >
        Anunțuri
      </Typography>
      <Grid container spacing={1} row-spacing={1}>
        <Grid item xs={10} spacing={1} s>
          <Typography align="center" variant="h5" gutterBottom>
            Aici este locul perfect unde poți DONA produse dar și unde poți
            PRIMI prin donație produsele de care ai nevoie.
          </Typography>
        </Grid>
        <Grid item xs={2} spacing={1}></Grid>
        <Grid item xs={2} spacing={2}>
          <Typography variant="h6" align="left" gutterLeft>
            Status anunț
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Activ"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Inactiv"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={2} spacing={1} style={{ margin: "0 4em" }}>
          <Typography variant="h6" align="left" gutterBottom>
            Categorie anunț
          </Typography>
          <FormGroup>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Donez"
              />
              <FormControlLabel value="male" control={<Radio />} label="Caut" />
            </RadioGroup>
          </FormGroup>
        </Grid>

        <Grid item xs={2} spacing={1} style={{ margin: "0 4em" }}>
          <Typography variant="h6" align="left" gutterBottom>
            Categorie produs
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Mobilă"
            />
            <FormControlLabel control={<Checkbox />} label="Electrocasnice" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Bricolaj"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Îmbrăcaminte"
            />
          </FormGroup>
        </Grid>
        <Grid
          item
          xs={1}
          spacing={1}
          align="center"
          style={{ margin: "1em 1em" }}
        >
          <Button
            margin="normal"
            fullWidth
            variant="contained"
            size="large"
            style={{
              color: "#FFFFFF",
              backgroundColor: "rgba(56, 129, 103, 1)",
              padding: "0.5rem",
            }}
          >
            Căutare
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          spacing={2}
          align="center"
          style={{ margin: "2em 6em" }}
        >
          <Typography style={{ margin: "0em 4em" }} variant="h6" gutterBottom>
            Ai un produs de donat sau vrei să găsești un donator?
            <Button
              style={{
                margin: "0em 1em",
                color: "#FFFFFF",
                backgroundColor: "rgba(56, 129, 103, 1)",
                padding: "0.5rem",
              }}
              variant="contained"
              size="large"
              href="/adaugaAnunt"
            >
              Adaugă anunț
            </Button>
          </Typography>
        </Grid>
      </Grid>

      <Products />
    </Layout>
  );
};

export default Anunturi;
