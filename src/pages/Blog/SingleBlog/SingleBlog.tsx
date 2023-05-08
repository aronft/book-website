import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import { Container } from "@/components/ui/objects/Container/Container";
import { useParams, useSearchParams } from "react-router-dom";
import styles from "./SingleBlog.module.scss";
import { useArticle } from "../hooks/useArticle";
import { ArticleSingle } from "../components/ArticleSingle/ArticleSingle";
export const SingleBlog = () => {
  const params = useParams();
  const { article, error, loading } = useArticle(params.id);

  if (loading) {
    return <h1>cargando</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <>
      <HeroInfo title={article!.title}></HeroInfo>
      <section className={styles["blog-section-container"]}>
        <Container className={styles["blog-section"]}>
          <ArticleSingle
            key={article!.id}
            date={article!.date}
            description={article!.description}
            id={article!.id}
            image={article!.image}
            title={article!.title}
            subContent={article!.subContent}
          />
        </Container>
      </section>
    </>
  );
};
