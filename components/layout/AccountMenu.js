import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Link from "@mui/material/Link";
import { useUser } from "components/User";
import SignOut from "components/SignOut";
import { Grid } from "@material-ui/core";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = useUser();
  return (
    <React.Fragment>
      {user && (
        <Grid container>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Contul tău">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 5 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  width: "23ch",
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem style={{ margin: "0.5em 1.3em" }}>
                <Avatar />
                <Link color="black" href="/profil" underline="none">
                  {"Profil"}
                </Link>
              </MenuItem>

              <MenuItem style={{ margin: "0.5em 1.3em" }}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                <Link color="black" href="/setariProfil" underline="none">
                  {"Setări"}
                </Link>
              </MenuItem>
              <Divider />

              <MenuItem style={{ margin: "0.5em 1.3em" }}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <SignOut />
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            ></IconButton>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}
