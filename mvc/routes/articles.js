var express = require("express");
var router = express.Router();
const articleCtl = require("../controllers/articles");

router.get("/", articleCtl.getArticles);

router.post("/", articleCtl.addArticle);

router.post("/clap", articleCtl.clapArticle);

router.post("/comment", articleCtl.commentArticle);

module.exports = router;
