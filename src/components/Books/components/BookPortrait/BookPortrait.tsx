import styles from "./BookPortrait.module.scss";

export interface BookPortraitProps {
  backgroundVisible?: boolean;
  imageSrc: string;
  imageAlt: string;
  type: "print" | "digital" | "vinilo";
}
export const BookPortrait = ({
  backgroundVisible = false,
  imageSrc,
  imageAlt,
}: BookPortraitProps) => {
  return (
    <div className={styles["book-portrait"]}>
      <img className={styles["book-porttrait__image"]} src={imageSrc} alt={imageAlt} />
    </div>
  );
};
