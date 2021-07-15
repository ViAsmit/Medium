import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#C4E2FF",
    color: "black",
  },
  container: {
    padding: theme.spacing(5),
  },
  heading: {
    fontFamily: "gt-super, Georgia, Cambria, 'Times New Roman', Times, serif",
    fontWeight: "250",
    fontSize: "65px",
    lineHeight: "70px",
  },
  subheading: {
    fontFamily: "gt-super, Georgia, Cambria, 'Times New Roman', Times, serif",
    lineHeight: theme.spacing(0.16),
  },
  button: {
    borderRadius: "25px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
  },
}));

function Introdutory() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
          <Grid container xs={5}>
            <Typography variant="h2" className={classes.heading}>
              Medium is a place to write, read and connect
            </Typography>
            <br />
            <Typography variant="h6" className={classes.subheading}>
              It's easy and free to host to post your thinking on any topic and
              connect with million of readers.
            </Typography>
            <br />
            <Button variant="outlined" className={classes.button}>
              Start Writing
            </Button>
          </Grid>
          <Grid
            xs={7}
            container
            justifyContent="flex-end"
            alignContent="flex-end"
          >
            <StaticImage
              src="../images/scribble.png"
              width={350}
              height={350}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Introdutory;
