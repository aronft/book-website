import classNames from "classnames";
import styles from "./BookPortrait.module.scss";

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
      <img className={styles["book-porttrait__image"]} src={imageSrc} alt={imageAlt} />
    </div>
  );
};
