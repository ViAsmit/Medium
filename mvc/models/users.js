const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  salt: String,
  profile_image: {
    type: String,
    default: "default-avatar",
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(64).toString("hex");
  this.password = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
  return;
};

userSchema.methods.validatePassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
  return hash === this.password;
};

userSchema.methods.getJwt = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
    },
    process.env.JWT_TOKEN
  );
};

userSchema.methods.follow = function (userId) {
  if (this.following.indexOf(userId) === -1) {
    this.following.push(userId);
  }
  return this.save();
};

userSchema.methods.addFollower = function (userId) {
  if (this.followers.indexOf(userId) === -1) {
    this.followers.push(userId);
  }
  return this.save();
};

mongoose.model("User", userSchema);
