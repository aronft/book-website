import { Article } from "../../Models/Article";
import { ARTICLES } from "../../data/articles";

export const getArticlesByLimit = (limit: number): Article[] => {
  const articles = ARTICLES.filter((article, index) => index < limit);
  console.log(articles);
  return articles;
};
