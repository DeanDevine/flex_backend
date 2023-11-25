const request = require("supertest");
const app = require("../index");
const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data/test-data-index");

beforeEach(() => seed(data));
afterAll(() => db.end());
