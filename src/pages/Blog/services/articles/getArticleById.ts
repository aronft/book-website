import { ARTICLES } from "@/data/articles";
import { Article } from "../../Models/Article";

export const getArticleById = (id: string): Article | undefined => {
  const article = ARTICLES.find((article) => article.id === id);
  return article;
};
