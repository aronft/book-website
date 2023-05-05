import { Button } from "../../atoms/Button";
import { Heading, HeadingProps } from "../../atoms/Heading/Heading";
import styles from "./ArticleCard.module.scss";

interface ArticleCardProps extends Pick<HeadingProps, "level"> {
  image: string;
  title: string;
  description: string;
  date: string;
}

export const ArticleCard = ({ image, title, description, date, level }: ArticleCardProps) => {
  return (
    <section className={styles["article"]}>
      <div className={styles["article__image-container"]}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.article__info}>
        <Heading level={level}>{title}</Heading>
        <p className={styles["article__description"]}>{description}</p>
        <footer className={styles["article__footer"]}>
          <Button href="/articles/1" color="primary">
            Read more
          </Button>
          <span>Author - {date}</span>
        </footer>
      </div>
    </section>
  );
};
