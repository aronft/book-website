import { Heading } from "@/components/ui/atoms/Heading/Heading";
import styles from "./Chapter.module.scss";
interface ChapterProps {
  title: string;
  description: string;
  length: string;
  pages: number;
}
export const Chapter = ({ title, description, length, pages }: ChapterProps) => {
  return (
    <section className={styles.chapter}>
      <Heading level="h3" size="small">
        {title}
      </Heading>
      <p className={styles.chapter__description}>{description}</p>
      <footer className={styles.chapter__footer}>
        <div className={styles["chapter__details-container"]}>
          <div className={styles.circle}></div>
          <p className={styles.chapter__details}>
            Pages : <span>{pages} pages</span>
          </p>
        </div>
        <div className={styles["chapter__details-container"]}>
          <div className={styles.circle}></div>
          <p className={styles.chapter__details}>
            length : <span>{length}</span>
          </p>
        </div>
      </footer>
    </section>
  );
};
