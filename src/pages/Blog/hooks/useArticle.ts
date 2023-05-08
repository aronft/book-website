import { useEffect, useState } from "react";
import { getArticleById } from "../services/articles/getArticleById";
import { Article } from "../Models/Article";

export const useArticle = (id: string) => {
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState<string | undefined>();
  useEffect(() => {
    const newArticle = getArticleById(id);
    setArticle(newArticle);
    if (!newArticle) {
      seterror("No se pudo encontrar el post");
    }
    setLoading(false);
  }, [id]);

  return { article, error, loading };
};
