const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const registerUser = ({ body }, res) => {
  if (!body.email || !body.password || !body.password_confirm) {
    return res.send({ message: "All Feilds Required" });
  }
  if (body.password !== body.password_confirm) {
    return res.send({ message: "password dont match." });
  }

  const user = new User();
  user.email = body.email;
  user.setPassword(body.password);

  console.log("=====================");
  console.log(user);
  console.log("=====================");

  user.save((err, newUser) => {
    if (err) {
      if (err.errMsg && err.errMsg.includes("duplicate key error")) {
        console.log(err);
        console.log("===============");
        console.log(newUser);
        return res.json({ message: "Email already Registered....." });
      }
      return res.json({ message: "Something Went Wrong" });
    } else {
      const token = newUser.getJwt();
      console.log("===============");
      console.log(newUser);
      console.log("===============");
      return res.status(201).json({ message: "Created user", token });
    }
  });
};

const loginUser = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.send({ message: "All Feilds Required" });
  }

  passport.authenticate("local", (err, user, info) => {
    if (user) {
      const token = user.getJwt();
      return res.status(201).json({ message: "Logged In", token });
    } else {
      return res.status(401).json(info);
    }
  })(req, res);
};

module.exports = {
  registerUser,
  loginUser,
};
