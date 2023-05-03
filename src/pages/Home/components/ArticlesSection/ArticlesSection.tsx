import { Heading } from "@/components/ui/atoms/Heading/Heading";
import { Separator } from "@/components/ui/atoms/Separator/Separator";
import { ArticleCard } from "@/components/ui/molecules/ArticleCard/ArticleCard";
import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./ArticleSection.module.scss";
import womenReadingImage from "@/assets/images/articles/women-reading.png";
import girlReadingImage from "@/assets/images/articles/girl-reading.png";
import bookImage from "@/assets/images/articles/book.png";
export const ArticlesSection = () => {
  return (
    <section className={styles.article}>
      <Container>
        <div className={styles.article__title}>
          <Heading level="h2" size="medium">
            Articles & Resources
          </Heading>
          <Separator color="secondary" orientation="horizontal" size="medium" />
        </div>
        <div className={styles.article__articles}>
          <ArticleCard
            title="The energy efficiency offers hydrotherapy or swim"
            description="The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
            level="h3"
            date="23.05.2022"
            image={womenReadingImage}
          />
          <ArticleCard
            title="Release of Letraset sheets tools containing  passages"
            description="The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
            level="h3"
            date="23.05.2022"
            image={bookImage}
          />

          <ArticleCard
            title="The energy efficiency offers hydrotherapy or swim"
            description="loremThe point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
            level="h3"
            date="23.05.2022"
            image={girlReadingImage}
          />
        </div>
      </Container>
    </section>
  );
};
