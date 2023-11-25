const express = require("express");
const articleRouter = require("./routes/articles");

const app = express();

app.use(express.json());

app.use("/api/articles", articleRouter);

module.exports = app;
