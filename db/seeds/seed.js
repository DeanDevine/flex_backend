const db = require("../connection");
const format = require("pg-format");

const seed = ({ articleData }) => {
  return db
    .query(`DROP TABLE IF EXISTS articles;`)
    .then(() => {
      return db.query(`CREATE TABLE articles (
        article_id SERIAL PRIMARY KEY,
        title VARCHAR NOT NULL,
        body VARCHAR NOT NULL,
        article_img_url VARCHAR DEFAULT 'https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?w=700&h=700'
     )`);
    })
    .then(() => {
      const insertArticlesQueryStr = format(
        `INSERT INTO articles (title, body, article_img_url) VALUES %L RETURNING *;`,
        articleData.map(({ title, body, article_img_url }) => [
          title,
          body,
          article_img_url,
        ])
      );
      return db.query(insertArticlesQueryStr);
    });
};

module.exports = seed;
