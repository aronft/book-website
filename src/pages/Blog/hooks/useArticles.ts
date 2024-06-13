import { useEffect, useState } from "react";
import { getArticlesByLimit } from "../services/articles/getArticlesByLimit";
import { Article } from "../Models/Article";

export const useAritcles = (limit: number) => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const articlesByLimit = getArticlesByLimit(limit);
    setArticles(articlesByLimit);
  }, [limit]);

  return { articles };
};
