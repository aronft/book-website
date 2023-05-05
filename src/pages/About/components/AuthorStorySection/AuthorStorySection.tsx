import { Heading } from "@/components/ui/atoms/Heading/Heading";
import { SectionTitle } from "@/components/ui/molecules/SectionTitle/SectionTitle";
import { Container } from "@/components/ui/objects/Container/Container";
import authorWithLaptopImage from "@/assets/images/author-laptop.png";
import styles from "./AuthorStorySection.module.scss";

export const AuthorStorySection = () => {
  return (
    <section className={styles["author-story"]}>
      <Container className={styles["author-story__content"]}>
        <div className={styles.content__left}>
          <SectionTitle separator aligment="left">
            My Story
          </SectionTitle>
          <p className={styles["author-story__description"]}>
            Making this the first true generator on the Internet. It uses a dictionary of over 200
            Latin words, combined with a handful of model sentence structures.
          </p>
          <div className={styles["timeline"]}>
            <div className={styles.timeline__row}>
              <div className={styles.timeline__number}>01</div>
              <div className={styles.timeline__content}>
                <Heading size="small">Great Author Awards - 1996 & 2000</Heading>
                <p className={styles.timeline__description}>
                  How to navigate around the interface and toggle on/off the panels you wish to use.
                </p>
              </div>
            </div>
            <div className={styles.timeline__row}>
              <div className={styles.timeline__number}>02</div>
              <div className={styles.timeline__content}>
                <Heading>Great Author Awards - 1996 & 2000</Heading>
                <p className={styles.timeline__description}>
                  How to navigate around the interface and toggle on/off the panels you wish to use.
                </p>
              </div>
            </div>
            <div className={styles.timeline__row}>
              <div className={styles.timeline__number}>03</div>
              <div className={styles.timeline__content}>
                <Heading>Great Author Awards - 1996 & 2000</Heading>
                <p className={styles.timeline__description}>
                  How to navigate around the interface and toggle on/off the panels you wish to use.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content__right}>
          <div className={styles["author-story__image-container"]}>
            <img src={authorWithLaptopImage} alt="Author thinking in front of a laptop" />
          </div>
        </div>
      </Container>
    </section>
  );
};
