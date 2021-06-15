const mongoose = require("mongoose");
const User = mongoose.model("User");
const Article = mongoose.model("Article");

const addArticle = (req, res, next) => {
  console.log(req.body);
  const { text, title, claps, description, author_id } = req.body;

  const obj = {
    text,
    title,
    claps,
    description,
    feature_img: "",
    author: author_id,
  };

  const article = new Article(obj);

  article.save((err, art) => {
    if (err) res.send(err);
    else if (!art) res.send(400);
    else {
      return res.send(art);
    }
  });

  // res.send("ok");
};

const getArticles = (req, res, next) => {
  console.log(req.query);
  console.log("===");
  if (req.query.id) {
    Article.findById(req.query.id)
      .populate("author")
      .populate("author.comments")
      .exec((err, art) => {
        if (err) res.send(err);
        else if (!art) res.send(404);
        else res.send(art);
      });
  } else {
    Article.find()
      .populate("author")
      .populate("comments.author")
      .exec((err, art) => {
        if (err) res.send(err);
        else if (!art) res.send(404);
        else res.send(art);
      });
  }
};

const clapArticle = (req, res, next) => {
  Article.findById(req.body.article_id).exec((err, art) => {
    if (err) res.send(err);
    else if (!art) res.send(404);
    else {
      art.clap().then((_art) => {
        res.send(_art);
      });
    }
  });
  // res.send("ok");
};

const commentArticle = (req, res, next) => {
  Article.findById(req.body.article_id).then((art) => {
    return art
      .comment({
        author: req.body.author_id,
        text: req.body.text,
      })
      .then((_art) => {
        return res.send(_art);
        // return res.json({ msg: "done" });
      });
  });
};

module.exports = {
  addArticle,
  getArticles,
  clapArticle,
  commentArticle,
};
