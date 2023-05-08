import { Article } from "../../Models/Article";
import { ARTICLES } from "../../data/articles";

export const getArticleById = (id: string): Article | undefined => {
  const article = ARTICLES.find((article) => article.id === id);
  return article;
};
