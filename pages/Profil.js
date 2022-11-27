import Layout from "components/layout/Layout";
import MenuItem from "@mui/material/MenuItem";
import Cards from "components/layout/Card";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import SettingsIcon from "@mui/icons-material/Settings";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Grid, Typography, Avatar } from "@material-ui/core";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Profil = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout title="Profil">
      <Grid container spacing={1} justify="center" style={{margin: '5em 0 1.2em 0'}}>
        <Grid item xs={6}>
          <Typography variant="h4" align="left" gutterBottom>
            <MenuItem>
              <Avatar style={{ width: 125, height: 125 }}></Avatar>
            </MenuItem>
            Nume cont
          </Typography>

          <Typography variant="subtitle2" component="div">
            <MailIcon></MailIcon>
            <a>xxxxxxxxxxxx@yahoo.com</a>
          </Typography>

          <Typography variant="subtitle2" component="div">
            <CallIcon></CallIcon>
            <a>07xxxxxxxx</a>
          </Typography>

          <Typography variant="subtitle2" component="div">
            <SettingsIcon></SettingsIcon>
            <a style={{ color: "#388167" }} href="/setariProfil">
              {"Setări profil"}
            </a>
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ borderBottom: 1, borderColor: "#388167" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              
            >
              <Tab style={{color:'#388167'}} label="Donații" {...a11yProps(0)} />
              <Tab style={{color:'#388167'}} label="Probleme" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container spacing={2}>
              <Grid item>
                <Cards></Cards>
              </Grid>
              <Grid item>
                <Cards></Cards>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={2}>
              <Grid item>
                <Cards></Cards>
              </Grid>
              <Grid item>
                <Cards></Cards>
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Profil;
