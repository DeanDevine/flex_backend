const request = require("supertest");
const app = require("../index");
const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data/test-data-index");

beforeEach(() => seed(data));
afterAll(() => db.end());

describe("GET /api/articles", () => {
  test("status:200, responds with a JSON object containing an array of articles", () => {
    return request(app)
      .get("/api/articles")
      .expect(200)
      .then(({ body }) => {
        const { articles } = body;
        expect(articles).toHaveLength(3);
        articles.forEach((article) => {
          expect(article).toMatchObject({
            article_id: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String),
            article_img_url: expect.any(String),
          });
        });
      });
  });
});
