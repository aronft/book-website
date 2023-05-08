import { Text } from "@/components/ui/atoms/Text/Text";
import { BookPortrait } from "../BookPortrait/BookPortrait";
import { Heading } from "@/components/ui/atoms/Heading/Heading";
import { BookPortraitProps } from "../BookPortrait/BookPortrait";
import styles from "./BookDetailed.module.scss";
import { PropsWithChildren } from "react";

interface BookDetailedProps extends Pick<BookPortraitProps, "type"> {
  image: string;
  title: string;
  description: string;
  publisher: string;
  language: string;
  pages: number;
  isbn: string;
  dimensions?: string;
}
export const BookDetailed = ({
  image,
  title,
  description,
  type,
  publisher,
  language,
  pages,
  isbn,
  dimensions,
  children,
}: PropsWithChildren<BookDetailedProps>) => {
  return (
    <div className={styles["book-detailed"]}>
      <BookPortrait imageSrc={image} imageAlt={title} size="full" type={type} backgroundVisible />

      <div className={styles["book-detailed__info"]}>
        <Heading level="h1" size="medium">
          {title}
        </Heading>
        <Text tag="span" color="secondary" size="lg" weight={800}>
          $30.
          <Text tag="span" color="secondary" size="xs" weight={800}>
            00 USD
          </Text>
        </Text>
        <Text tag="p">{description}</Text>
        <div className={styles["book-detailed__details"]}>
          <div className={styles.detail}>
            <Text tag="p" size="xs" color="thertiary">
              Publisher
            </Text>
            <span>:</span>
            <Text tag="p" size="xs" color="thertiary">
              {publisher}
            </Text>
          </div>
          <div className={styles.detail}>
            <Text tag="p" size="xs" color="thertiary">
              Language
            </Text>
            <span>:</span>
            <Text tag="p" size="xs" color="thertiary">
              {language}
            </Text>
          </div>
          <div className={styles.detail}>
            <Text tag="p" size="xs" color="thertiary">
              Paperback
            </Text>
            <span>:</span>

            <Text tag="p" size="xs" color="thertiary">
              {pages} pages
            </Text>
          </div>
          <div className={styles.detail}>
            <Text tag="p" size="xs" color="thertiary">
              ISBN-10
            </Text>
            <span>:</span>
            <Text tag="p" size="xs" color="thertiary">
              {isbn}
            </Text>
          </div>
          <div className={styles.detail}>
            <Text tag="p" size="xs" color="thertiary">
              Dimensions
            </Text>
            <span>:</span>
            <Text tag="p" size="xs" color="thertiary">
              {dimensions}
            </Text>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
