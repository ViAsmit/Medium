import { Button, makeStyles, Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { registerUser } from "../redux/users/usersAction";

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

function RegisterModal({ open, setopen, userRegister }) {
  const classes = useStyles();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setopen(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(credentials);
    await userRegister(credentials)
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
        <Typography variant="h4">Join Medium.</Typography>
        <br />
        <br />
        <form className={classes.input} noValidate autoComplete="off">
          <Typography id="simple-modal-email" variant="h6" color="secondary">
            Enter your UserName
          </Typography>
          <br />
          <TextField
            value={credentials.name}
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            onChange={(e) =>
              setcredentials({ ...credentials, name: e.target.value })
            }
          />
          <br />
          <br />
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
          <Typography id="simple-modal-password" variant="h6" color="secondary">
            Comfirm your Password
          </Typography>
          <br />
          <TextField
            value={credentials.password_confirm}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) =>
              setcredentials({
                ...credentials,
                password_confirm: e.target.value,
              })
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
            Sign up
          </Button>
        </form>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          Already have an account?{" "}
          <span style={{ color: "green", fontWeight: "bold" }}> Sign in</span>
        </Typography>
        <br />
        <br />
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ width: "50%" }}
        >
          Click “Sign Up” to agree to Medium’s <u>Terms of Service</u> and
          acknowledge that Medium’s <u>Privacy Policy</u> applies to you.
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
    userRegister: async (user) => await dispatch(registerUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterModal);
