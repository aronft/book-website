import { Button } from "@/components/ui/atoms/Button";
import { Container } from "@/components/ui/objects/Container/Container";
import { Hero } from "@/components/ui/objects/Hero/Hero";
import bookImage from "@/assets/images/the_dark_light_book.png";
import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <Hero tag="section">
      <Container className={styles["hero-section"]}>
        <div className={styles["hero-section__left"]}>
          <span className={styles["hero-section__decoration"]}>Welcome to Pages</span>
          <h1 className={styles["hero-section__title"]}>Books are uniquely portable magic </h1>
          <p className={styles["hero-section__description"]}>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form.
          </p>
          <div className={styles["hero-section__actions"]}>
            <Button color="secondary" size="medium">
              Order Today
            </Button>
            <Button href="#" color="white">
              Read Free Demo
            </Button>
          </div>
          <div className={styles["hero-section__tags"]}>
            <div className={styles["tag"]}>
              <div className={styles["tag__icon"]}></div>
              <div className={styles["tag__description"]}>
                <span className={styles["description__title"]}>Pages:</span>
                <span className={styles["description__total"]}>586pages</span>
              </div>
            </div>
            <div className={styles["tag"]}>
              <div className={styles["tag__icon"]}></div>
              <div className={styles["tag__description"]}>
                <span className={styles["description__title"]}>Length:</span>
                <span className={styles["description__total"]}>10 Hours</span>
              </div>
            </div>
            <div className={styles["tag"]}>
              <div className={styles["tag__icon"]}></div>
              <div className={styles["tag__description"]}>
                <span className={styles["description__title"]}>Rating</span>
                <span className={styles["description__total"]}>4.5/5 (305 rating)</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["hero-section__right"]}>
          <img src={bookImage} className={styles["hero-image"]} alt="The dark light book" />
        </div>
      </Container>
    </Hero>
  );
};
