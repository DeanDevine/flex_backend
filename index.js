const express = require("express");
const articleRouter = require("./routes/articles");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/articles", articleRouter);

module.exports = app;
