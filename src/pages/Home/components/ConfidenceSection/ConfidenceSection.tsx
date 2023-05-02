import { Heading } from "@/components/ui/atoms/Heading/Heading";
import { Separator } from "@/components/ui/atoms/Separator/Separator";
import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./ConfidenceSection.module.scss";
import amazenLogo from "@/assets/images/amazen.png";
import meganBooksLogo from "@/assets/images/megan-books.png";
import megankLogo from "@/assets/images/megank.png";
import urbanLibLogo from "@/assets/images/urban.png";

export const ConfidenceSection = () => {
  return (
    <section className={styles["confidence-section"]}>
      <Container>
        <div className={styles["confidence-section__title"]}>
          <Heading level="h2" size="medium">
            Trusted by the Best
          </Heading>
          <Separator color="secondary" orientation="horizontal" />
        </div>
        <div className={styles["confidence-section__companies"]}>
          <div className={styles["company"]}>
            <img
              className={styles["company__image"]}
              src={amazenLogo}
              alt="Amazen company logo"
            />
            <Heading level="h3" size="small">
              Amazen Corp
            </Heading>
            <p className={styles["company__description"]}>
              A long established fact that a who looking at its layout.
            </p>
          </div>
          <div className={styles["company"]}>
            <img
              className={styles["company__image"]}
              src={meganBooksLogo}
              alt="Megan books"
            />
            <Heading level="h3" size="small">
              Megan books
            </Heading>
            <p className={styles["company__description"]}>
              A long established fact that a who looking at its layout.
            </p>
          </div>
          <div className={styles["company"]}>
            <img
              className={styles["company__image"]}
              src={megankLogo}
              alt="Los books company logo"
            />
            <Heading level="h3" size="small">
              Los books
            </Heading>
            <p className={styles["company__description"]}>
              A long established fact that a who looking at its layout.
            </p>
          </div>
          <div className={styles["company"]}>
            <img
              className={styles["company__image"]}
              src={urbanLibLogo}
              alt="Urbal Lib logo"
            />
            <Heading level="h3" size="small">
              Urban lib
            </Heading>
            <p className={styles["company__description"]}>
              A long established fact that a who looking at its layout.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
