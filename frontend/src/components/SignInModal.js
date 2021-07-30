import { Button, makeStyles, Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { loginUser } from "../redux/users/usersAction";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "40%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    "& > *": {
      width: "50%",
    },
  },
  buttons: {
    borderRadius: "25px",
    width: "20%",
  },
}));

function SignInModal({ open, setopen, userSignin, updateUser }) {
  const classes = useStyles();
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setopen(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await userSignin(credentials)
      .then((res) => {
        console.log(res);
      })
      .then((res) => {
        setopen(false);
      });
  };

  const body = (
    <center>
      <div style={modalStyle} className={classes.paper}>
        <br />
        <Typography variant="h4">Welcome Back.</Typography>
        <br />
        <br />
        <form className={classes.input} noValidate autoComplete="off">
          <Typography id="simple-modal-email" variant="h6" color="secondary">
            Enter your Email Address
          </Typography>
          <br />
          <TextField
            value={credentials.email}
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            onChange={(e) =>
              setcredentials({ ...credentials, email: e.target.value })
            }
          />
          <br />
          <br />
          <Typography id="simple-modal-password" variant="h6" color="secondary">
            Enter your Password
          </Typography>
          <br />
          <TextField
            value={credentials.password}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) =>
              setcredentials({ ...credentials, password: e.target.value })
            }
          />
          <br />
          <br />
          <br />
          <Button
            variant="contained"
            className={classes.buttons}
            color="secondary"
            onClick={handleClick}
          >
            Log In
          </Button>
        </form>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          No account?{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            {" "}
            Create One
          </span>
        </Typography>
        <br />
        <br />
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ width: "40%" }}
        >
          Click “Log In” to agree to Medium’s Terms of Service and acknowledge
          that Medium’s Privacy Policy applies to you.
        </Typography>
      </div>
    </center>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignin: async (user) => await dispatch(loginUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(SignInModal);
// export default SignInModal;
