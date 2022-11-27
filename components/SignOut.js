import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";
import Link from "components/Link";
import { Typography, Grid } from "@material-ui/core";
import useClassStyles from "./styles/ClassStyles";
const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignOut() {
  const classes = useClassStyles();
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <Grid item key="delogare">
      <Link href="/" onClick={signout}>
        <Typography className={classes.link}>Delogare</Typography>
      </Link>
    </Grid>
  );
}
