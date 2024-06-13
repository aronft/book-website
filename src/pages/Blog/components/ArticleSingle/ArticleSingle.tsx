import React from "react";
import { Article } from "../../Models/Article";
import { Heading } from "@/components/ui/atoms/Heading/Heading";
import styles from "./ArticleSingle.module.scss";
import { ArticleSubSection } from "../ArticleSubSection/ArticleSubSection";

export const ArticleSingle = ({ date, description, id, image, title, subContent }: Article) => {
  return (
    <div className={styles["single-article"]}>
      <img className={styles["single-article__image"]} src={image} alt={title} />
      <section className={styles["single-article__section"]}>
        <Heading level="h3" size="small">
          {date}
        </Heading>
        <p className={styles["single-article__description"]}>{description}</p>
      </section>
      <div className={styles["single-article__sub-sections"]}>
        {subContent.map((content, index) => {
          return (
            <ArticleSubSection
              level="h2"
              key={content.id}
              description={content.description}
              title={content.title}
              list={content.list}
              showQuote={subContent.length === 1 || index !== subContent.length - 1}
              listTye={(index + 1) % 2 === 0 ? "numeric" : "circle"}
            />
          );
        })}
      </div>
    </div>
  );
};
