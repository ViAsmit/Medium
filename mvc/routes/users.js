var express = require("express");
var router = express.Router();
const userCtl = require("../controllers/users");

/* GET users listing. */
router.get("/", userCtl.getUser);

router.post("/register", userCtl.registerUser);
router.post("/login", userCtl.loginUser);

router.post("/follow", userCtl.followUser);

module.exports = router;
