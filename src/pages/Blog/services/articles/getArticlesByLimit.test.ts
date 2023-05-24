import { getArticlesByLimit } from "./getArticlesByLimit";
test("getArticlesByLimit should return a list of articles with limit", () => {
  const limit = 2;
  const articles = getArticlesByLimit(limit);
  expect(articles.length).toBe(limit);
});
