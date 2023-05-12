import { Heading } from "@/components/ui/atoms/Heading/Heading";
import { Separator } from "@/components/ui/atoms/Separator/Separator";
import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./ArticleSection.module.scss";
import womenReadingImage from "@/assets/images/articles/women-reading.png";
import girlReadingImage from "@/assets/images/articles/girl-reading.png";
import bookImage from "@/assets/images/articles/book.png";
import { ArticleCard } from "@/pages/Blog/components/ArticleCard/ArticleCard";
import { useAritcles } from "@/pages/Blog/hooks/useArticles";
export const ArticlesSection = () => {
  const { articles } = useAritcles(3);
  return (
    <section className={styles.article}>
      <Container>
        <div className={styles.article__title}>
          <Heading level="h2" size="semi-large">
            Articles & Resources
          </Heading>
          <Separator color="secondary" orientation="horizontal" size="medium" />
        </div>
        <div className={styles.article__articles}>
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
              level="h3"
              date={article.date}
              image={article.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
