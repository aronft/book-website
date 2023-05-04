import { Button } from "@/components/ui/atoms/Button";
import { SectionTitle } from "@/components/ui/molecules/SectionTitle/SectionTitle";
import { Container } from "@/components/ui/objects/Container/Container";
import coffeeBookImage from "@/assets/images/cofee-book.png";
import styles from "./GetBookSection.module.scss";

export const GetBookSection = () => {
  return (
    <section className={styles["getbook-section"]}>
      <Container className={styles.content}>
        <div className={styles.content__left}>
          <SectionTitle aligment="left" separator color="white">
            Get Book Copy Today!
          </SectionTitle>
          <p className={styles.content__description}>
            This the first true value generator on the Internet. It uses alphas dictionary of over
            200 Latin words.
          </p>
          <Button color="secondary" type="outline" size="medium" colorText="white">
            Order Today
          </Button>
        </div>
        <div className={styles.content__right}>
          <img src={coffeeBookImage} alt="coffee with book" />
        </div>
      </Container>
    </section>
  );
};
