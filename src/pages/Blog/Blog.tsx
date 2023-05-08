import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import { Articles } from "./components/Articles/Articles";
import { ARTICLES } from "./data/articles";
import { useState } from "react";
import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./Blog.module.scss";

export const Blog = () => {
  const [articles, setArticles] = useState(ARTICLES);

  return (
    <>
      <HeroInfo title="Articles">
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in
        some form.
      </HeroInfo>
      <section className={styles["articles-section"]}>
        <Container>
          <Articles tag="div" articles={articles} />
        </Container>
      </section>
    </>
  );
};
