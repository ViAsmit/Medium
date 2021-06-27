const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Article = mongoose.model("Article");

const registerUser = ({ body }, res) => {
  if (!body.email || !body.password || !body.password_confirm || !body.name) {
    return res.send({ message: "All Feilds Required" });
  }
  if (body.password !== body.password_confirm) {
    return res.send({ message: "password dont match." });
  }

  const user = new User();
  user.email = body.email;
  user.name = body.name;
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
      return res
        .status(201)
        .json({ message: "Created user", token: token, uid: newUser._id });
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
      return res
        .status(201)
        .json({ message: "Logged In", token: token, uid: user._id });
    } else {
      return res.status(401).json(info);
    }
  })(req, res);
};

const getUser = (req, res, next) => {
  console.log(req.query);
  // res.send("ok");
  User.findById(req.query.user_id).then((user) => {
    return Article.find({ author: req.query.user_id }).then((_arts) => {
      return res.json({ user: user, articles: _arts });
    });
  });
};

const followUser = (req, res, next) => {
  User.findById(req.body.user_id).then((user) => {
    return user
      .follow(req.body.to_follow_id)
      .then(() => {
        User.findById(req.body.to_follow_id).then((user) => {
          return user
            .addFollower(req.body.user_id)
            .then(() => {
              return res.json({ msg: "followed" });
            })
            .catch(next);
        });
      })
      .catch(next);
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  followUser,
};
