import { SectionTitle } from "@/components/ui/molecules/SectionTitle/SectionTitle";
import { Container } from "@/components/ui/objects/Container/Container";
import authorImage from "@/assets/images/author-coffee.png";
import styles from "./AboutAuthorSection.module.scss";
import { Button } from "@/components/ui/atoms/Button";

export const AboutAuthorSection = () => {
  return (
    <section className={styles["about-author"]}>
      <Container className={styles["about-author__content"]}>
        <div className={styles["about-author__image-container"]}>
          <img src={authorImage} alt="Author with a cup of coffee" />
        </div>
        <div className={styles["about-author__information"]}>
          <div className={styles.information__row}>
            <p className={styles.information__title}>Country:</p>
            <span className={styles.information__description}>United Kingdom</span>
          </div>
          <div className={styles.information__row}>
            <p className={styles.information__title}>Language:</p>
            <span className={styles.information__description}>English</span>
          </div>
          <div className={styles.information__row}>
            <p className={styles.information__title}>Genre:</p>
            <span className={styles.information__description}>Historiography</span>
          </div>
          <div className={styles.information__row}>
            <p className={styles.information__title}>Publication date:</p>
            <span className={styles.information__description}>1991</span>
          </div>
          <div className={styles.information__row}>
            <p className={styles.information__title}>share us on</p>
            <span className={styles.information__description}></span>
          </div>
        </div>
        <div className={styles["about-author__description"]}>
          <SectionTitle aligment="left" separator>
            About Dr. John Abraham
          </SectionTitle>
          <p className={styles["about-author__description__text"]}>
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, that can combined with a handful of model sentence structures.
          </p>
          <Button color="secondary" type="fill" size="medium" colorText="primary">
            Contact now
          </Button>
        </div>
      </Container>
    </section>
  );
};
