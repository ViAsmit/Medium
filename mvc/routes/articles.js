var express = require("express");
var router = express.Router();
const articleCtl = require("../controllers/articles");
const middleware = require("./middleware/middleware");

router.get("/", articleCtl.getArticles);

router.post("/", middleware.authorize, articleCtl.addArticle);

router.post("/clap", middleware.authorize, articleCtl.clapArticle);

router.post("/comment", middleware.authorize, articleCtl.commentArticle);

module.exports = router;
