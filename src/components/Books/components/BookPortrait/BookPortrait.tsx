import classNames from "classnames";
import styles from "./BookPortrait.module.scss";
import { TypeBook } from "../TypeBook/TypeBook";

export interface BookPortraitProps {
  backgroundVisible?: boolean;
  imageSrc: string;
  imageAlt: string;
  size: "small" | "medium" | "full";
  type: "print" | "digital" | "vinilo";
}

export const BookPortrait = ({
  backgroundVisible = false,
  imageSrc,
  imageAlt,
  size = "small",
  type,
}: BookPortraitProps) => {
  const paddingPortrait = backgroundVisible ? styles["book-portrait--bg"] : "";
  return (
    <div
      className={classNames(
        styles["book-portrait"],
        paddingPortrait,
        styles[`book-portrait--${size}`]
      )}
    >
      {backgroundVisible && <TypeBook className={styles["book-portrait__type"]} type={type} />}
      <img className={styles["book-portrait__image"]} src={imageSrc} alt={imageAlt} />
    </div>
  );
};
