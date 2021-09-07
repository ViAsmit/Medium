import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Grid } from "@material-ui/core";
import SignInModal from "./SignInModal";
import RegisterModal from "./RegisterModal";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#C4E2FF",
    color: "black",
    width: "100%",
    height: "8vh",
  },
  logo: {},
  buttons: {
    borderRadius: "25px",
    color: "white",
    backgroundColor: "black",
  },
  links: {
    paddingRight: theme.spacing(3),
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  actions: {
    marginTop: theme.spacing(2),
  },
}));

function Header({ user }) {
  const classes = useStyles();
  const [open, setopen] = useState(false);
  const [openR, setopenR] = useState(false);

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    window.location.reload();
  };

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
            <Typography variant="body1" className={classes.links}>
              Our Story
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Membership
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Write
            </Typography>
            {user.name === "" ? (
              <Typography
                component="button"
                variant="body1"
                className={classes.links}
                onClick={() => setopen(true)}
              >
                Sign In
              </Typography>
            ) : (
              <Typography
                component="button"
                variant="body1"
                className={classes.links}
                onClick={signOut}
              >
                Sign Out
              </Typography>
            )}
            <Button
              variant="contained"
              className={classes.buttons}
              onClick={() => (user.name === "" ? setopenR(true) : {})}
            >
              {user.name !== "" ? `Hi ${user.name}` : "Get Started"}
            </Button>
          </Grid>
        </Toolbar>
        <SignInModal open={open} setopen={setopen} />
        <RegisterModal open={openR} setopen={setopenR} />
      </Container>
    </AppBar>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
