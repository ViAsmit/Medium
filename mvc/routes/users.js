var express = require("express");
var router = express.Router();
const userCtl = require("../controllers/users");
const middleware = require("./middleware/middleware");

/* GET users listing. */
router.get("/", userCtl.getUser);

router.post("/register", userCtl.registerUser);
router.post("/login", userCtl.loginUser);

router.post("/follow", middleware.authorize, userCtl.followUser);

module.exports = router;
