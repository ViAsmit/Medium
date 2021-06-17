const jwt = require("express-jwt");

const authorize = jwt({
  secret: process.env.JWT_TOKEN,
  algorithms: ["HS256"],
  userProperty: "payload",
});

module.exports = {
  authorize,
};
