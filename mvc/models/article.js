const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  text: String,
  title: String,
  description: String,
  feature_img: String,
  claps: Number,
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      text: String,
    },
  ],
});

articleSchema.methods.clap = function () {
  this.claps++;
  return this.save();
};

articleSchema.methods.comment = function (c) {
  this.comments.push(c);
  return this.save();
};

articleSchema.methods.addAuthor = function (id) {
  this.author = id;
  return this;
};

articleSchema.methods.getUserArticle = function (_id) {
  Article.find({ author: _id }).then((article) => {
    return article;
  });
};

module.exports = mongoose.model("Article", articleSchema);
