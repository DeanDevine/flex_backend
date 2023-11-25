const db = require("../db/connection");

exports.selectArticles = () => {
  let query = `SELECT article_id, title, body, article_img_url FROM articles`;
  return db.query(`${query};`).then(({ rows }) => {
    return rows;
  });
};
