const { getArticles } = require("../controllers/articles");

const articleRouter = require("express").Router();

articleRouter.route("/").get(getArticles);

module.exports = articleRouter;
