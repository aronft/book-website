import { SectionTitle } from "@/components/ui/molecules/SectionTitle/SectionTitle";
import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./EducationalGoalsSection.module.scss";
import womenReadingImage from "@/assets/images/woman-rest-reading-book.png";
export const EducationalGoalsSection = () => {
  return (
    <section className={styles.education}>
      <Container className={styles["education__content"]}>
        <SectionTitle aligment="middle" separator>
          What will you learn?
        </SectionTitle>

        <div className={styles["content__left"]}>
          <div className={styles["education__goals"]}>
            <div className={styles.goal}>
              <div className={styles.goal__number}>01</div>
              <div className={styles.goal__description}>
                Use HDFS & Map Reduce for storing & analyzing data at scale.
              </div>
            </div>
            <div className={styles.goal}>
              <div className={styles.goal__number}>02</div>
              <div className={styles.goal__description}>
                Consume streaming data using Spark Streaming, Flink, and Storm.
              </div>
            </div>
            <div className={styles.goal}>
              <div className={styles.goal__number}>03</div>
              <div className={styles.goal__description}>
                Choose an appropriate data storage technology for your application
              </div>
            </div>
            <div className={styles.goal}>
              <div className={styles.goal__number}>04</div>
              <div className={styles.goal__description}>
                Analyze non-relational data using HBase, Cassandra, and MongoDB.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content__right}>
          <div className={styles["image-container"]}>
            <img src={womenReadingImage} alt="Woman reading a book" />
          </div>
        </div>
      </Container>
    </section>
  );
};
