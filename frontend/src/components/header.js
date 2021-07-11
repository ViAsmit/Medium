import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Grid } from "@material-ui/core";
import logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#C4E2FF",
    color: "black",
    width: "100%",
    height: "8vh",
  },
  logo: {
    // marginLeft: theme.spacing(40),
  },
  button: {
    borderRadius: "25px",
    color: "white",
    backgroundColor: "black",
  },
  links: {
    paddingRight: theme.spacing(3),
  },
  actions: {
    // marginRight: theme.spacing(40),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.header}>
      <Container className={classes.root}>
        <Toolbar>
          <StaticImage
            className={classes.logo}
            alt="logo"
            src="../images/logo.png"
            height={50}
            width={250}
            // layout="fixed"
          />
          <Grid
            className={classes.actions}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Typography variant="p" className={classes.links}>
              Our Story
            </Typography>
            <Typography variant="p" className={classes.links}>
              Membership
            </Typography>
            <Typography variant="p" className={classes.links}>
              Write
            </Typography>
            <Button variant="contained" className={classes.button}>
              Get Started
            </Button>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
