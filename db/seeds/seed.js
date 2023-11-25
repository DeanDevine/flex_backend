const db = require("../connection");

const seed = async () => {
  await db.query(`DROP TABLE IF EXISTS articles;`);
  await db.query(`CREATE TABLE articles (
        article_id SERIAL PRIMARY KEY,
        title VARCHAR NOT NULL,
        body VARCHAR NOT NULL,
        article_img_url VARCHAR DEFAULT 'https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?w=700&h=700'
    )`);
};

module.exports = seed;
