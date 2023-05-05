import { Heading, HeadingProps } from "@/components/ui/atoms/Heading/Heading";
import { BookPortrait, BookPortraitProps } from "../BookPortrait/BookPortrait";
import { Button } from "@/components/ui/atoms/Button";
import styles from "./BookCard.module.scss";
import classNames from "classnames";
import { CircleIcon } from "@/components/ui/atoms/CircleIcon/CircleIcon";

interface BookCardProps
  extends Pick<HeadingProps, "level">,
    Pick<BookPortraitProps, "type" | "backgroundVisible"> {
  imageSrc: string;
  orientation: "horizontal" | "vertical";
  title: string;
  description: string;
  pages: number;
  length: string;
  price: number;
  type: "print" | "digital" | "vinilo";
  tag: string;
}
export const BookCard = ({
  imageSrc,
  orientation,
  title,
  description,
  pages,
  length,
  price,
  type,
  level,
  tag,
  backgroundVisible = false,
}: BookCardProps) => {
  const Tag = tag;
  return (
    <Tag className={classNames(styles["book-card"], styles[`book-card--${orientation}`])}>
      <BookPortrait
        imageAlt={title}
        imageSrc={imageSrc}
        type={type}
        backgroundVisible={backgroundVisible}
      />
      <div className={styles["book-card__content"]}>
        <div className={styles["book-card__title"]}>
          <Heading color="primary" size="semi-large" level={level}>
            {title}
          </Heading>
          {orientation === "vertical" && <p className={styles["book-card__price"]}>${price}</p>}
        </div>
        <p className={styles["book-card__description"]}>{description}</p>
        {orientation === "horizontal" ? (
          <div className={styles["book-card__details"]}>
            <div className={styles.detail}>
              <CircleIcon color="secondary" size="16px" />
              <p className={styles.detail__name}>Pages:</p>
              <span className={styles.detail__content}>{pages}pages</span>
            </div>
            <div className={styles.detail}>
              <CircleIcon color="secondary" size="16px" />
              <p className={styles.detail__name}>Length:</p>
              <span className={styles.detail__content}>{length}</span>
            </div>
          </div>
        ) : (
          <div className={styles["book-card__type"]}>
            <CircleIcon color="secondary" size="16px" />
            <p className={styles.type__title}>{type}</p>
          </div>
        )}
        <Button color="secondary" type="outline">
          Order Today
        </Button>
      </div>
    </Tag>
  );
};