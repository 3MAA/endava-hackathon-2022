import Link from "components/Link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { routes } from "data/routes";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    fontSize: "1.25em",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.info.main,
    },
    margin: '2.5em 0em 0em 0em',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const path = routes;
  const router = useRouter();
  return (
    <footer className={classes.footer}>
      <Container >
        <Grid container spacing={4} >
          {path.LOGGED_OUT.map(({ name, link }) => (
            <Grid item key={link}>
              <Link href={link}>
                <Typography
                  className={classes.link}
                  style={{
                    fontWeight: router.pathname === link && "bold",
                    borderBottom:
                      router.pathname === link && "1px solid #272828",
                  }}
                >
                  {name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" style={{ margin: "1.2em 0" }}></Grid>
        <Grid
          item
          style={{
            textDecoration: "none",
          }}
        ></Grid>
      </Container>
    </footer>
  );
};

export default Footer;
