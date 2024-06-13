import { ARTICLES } from "../../data/articles";
import { getArticleById } from "./getArticleById";

test("getArticleById should get article with valid id", () => {
  const articleExpected = ARTICLES[0];
  const article = getArticleById(articleExpected.id);
  expect(article).toEqual(articleExpected);
});

test("getArticleById should get undefined with none exist id", () => {
  const article = getArticleById("0001");
  expect(article).toEqual(undefined);
});
