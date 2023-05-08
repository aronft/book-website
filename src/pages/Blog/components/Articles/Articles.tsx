import { Article } from "../../Models/Article";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import styles from "./Articles.module.scss";

interface ArticlesProps {
  articles: Article[];
  tag: keyof JSX.IntrinsicElements;
}

export const Articles = ({ tag: Tag, articles }: ArticlesProps) => {
  return (
    <Tag className={styles.articles}>
      {articles.length > 0 &&
        articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            date={article.date}
            description={article.description}
            image={article.image}
            title={article.title}
          />
        ))}
    </Tag>
  );
};
