var express = require("express");
var router = express.Router();
const userCtl = require("../controllers/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", userCtl.registerUser);
router.post("/login", userCtl.loginUser);

module.exports = router;
