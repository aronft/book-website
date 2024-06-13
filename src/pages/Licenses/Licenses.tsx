import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import { Heading } from "@/components/ui/atoms/Heading/Heading";
import styles from "./Licenses.module.scss";
import { Container } from "@/components/ui/objects/Container/Container";

export const Licenses = () => {
  return (
    <>
      <HeroInfo title="Licenses">
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in
        some form.
      </HeroInfo>
      <section className={styles.licenses}>
        <Container className={styles["licenses__content"]}>
          <div className={styles.licenses__row}>
            <Heading size="medium" level="h2">
              Photography
            </Heading>
            <p className={styles.licenses__description}>
              All images used in the <strong>Pages</strong> Webflow Template are licensed for free
              personal and commercial use. If you'd like to use any specific image, you can check
              the licenses and download the images for free on <strong>Unsplash, Pexels.</strong>
            </p>
          </div>
          <div className={styles.licenses__row}>
            <Heading size="small" level="h2">
              Pexels
            </Heading>
            <p className={styles.licenses__description}>
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8
            </p>
          </div>
          <div className={styles.licenses__row}>
            <Heading level="h2">Unsplash</Heading>
            <p className={styles.licenses__description}>Image 1, Image 2, Image 3</p>
          </div>
          <div className={styles.licenses__row}>
            <Heading level="h2" size="medium">
              Fonts
            </Heading>
            <p className={styles.licenses__description}>
              Pages template uses free licensed<strong> Google Fonts.</strong> Please check{" "}
              <strong>Cardo</strong> and <strong>Inter</strong>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};
