import Link from "next/link";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { routes } from "data/routes";
import { Typography} from "@material-ui/core";
import logo from "/images/Logo.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import Button from "@mui/material/Button";
const Cardd = () => {
  const router = useRouter();
  const path = routes;
  return (
    <Grid container justify="center" spacing={4}>
      {path.ARTICLES.map(({ name, link, descriere }) => (
        <Card sx={{ maxWidth: 268, m: 3 }} >
          <Image alt="Logo" src={logo} />
          <CardContent>
            <Grid item key={link}>
              <Link href={link}>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    fontWeight: router.pathname === link && "bold",
                    borderBottom:
                      router.pathname === link && "1px solid #e3e6d5",
                  }}
                >
                  {name}
                </Typography>
              </Link>
              <Typography variant="body2" color="text.secondary">
                {descriere}
              </Typography>
            </Grid>
          </CardContent>
          <CardActions>
            <Button style={{backgroundColor:'#388167',  color: "#FFFFFF", padding:'0.5em' }} size="small" href={link}>
              Mai mult...
            </Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
};

export default Cardd;
