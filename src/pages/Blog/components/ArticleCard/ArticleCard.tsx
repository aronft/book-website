import { Button } from "../../../../components/ui/atoms/Button";
import { Heading, HeadingProps } from "../../../../components/ui/atoms/Heading/Heading";
import styles from "./ArticleCard.module.scss";

interface ArticleCardProps extends Pick<HeadingProps, "level"> {
  image: string;
  title: string;
  description: string;
  date: string;
  id: string;
}

export const ArticleCard = ({ image, title, description, date, level, id }: ArticleCardProps) => {
  return (
    <section className={styles["article"]}>
      <div className={styles["article__image-container"]}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.article__info}>
        <Heading level={level}>{title}</Heading>
        <p className={styles["article__description"]}>{description}</p>
        <footer className={styles["article__footer"]}>
          <Button
            href={`/articles/${id}`}
            color="primary"
            type="link"
            size="auto"
            colorText="primary"
          >
            Read more
          </Button>
          <span>Author - {date}</span>
        </footer>
      </div>
    </section>
  );
};
