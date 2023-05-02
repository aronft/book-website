import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./AboutAuthorSection.module.scss";
import classNames from "classnames";
import { Heading } from "@/components/ui/atoms/Heading/Heading";
import AuthorImage from "@/assets/images/author-photo.png";
import qrImage from "@/assets/images/qr-code.png";

export const AboutAuthorSection = () => {
  return (
    <section className={styles["author-section"]}>
      <Container className={styles["content"]}>
        <div className={styles["content__left"]}>
          <div className={styles["image-container"]}>
            <img
              src={AuthorImage}
              alt="Author working in laptop with a coffee"
            />
          </div>
        </div>
        <div className={styles["content__right"]}>
          <Heading level="h2" size="medium">
            About Author
          </Heading>
          <div className={styles["author-section__line"]}></div>
          <p className={styles["author-section__description"]}>
            All the Lorem Ipsum generators on the Internet tend to repeated
            predefined chunks as necessary, making this the first true value
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful.
          </p>
          <div className={styles["author-section__stats"]}>
            <div className={styles.stat}>
              <span className={styles.stat__count}>02</span>
              <p className={styles.stat__description}>Books Published</p>
            </div>
            <div className={styles["separator"]}></div>
            <div className={styles.stat}>
              <span className={styles.stat__count}>4.5</span>
              <p className={styles.stat__description}>User Rating</p>
            </div>
            <div className={styles["separator"]}></div>
            <div className={styles.stat}>
              <span className={styles.stat__count}>04</span>
              <p className={styles.stat__description}>Best seller awards</p>
            </div>
          </div>
          <div className={styles["contact"]}>
            <div className={styles["contact__qr-container"]}>
              <img src={qrImage} alt="qr code about author information" />
            </div>
            <div className={styles["contact__info"]}>
              <span
                className={classNames(
                  styles.contact__descripction,
                  "text--secondary"
                )}
              >
                John Abraham , Ph.d
              </span>
              <span className={styles.contact__descripction}>
                Mail : johnabraham@gmail.com
              </span>
              <span className={styles.contact__descripction}>
                Phone : (+2) 123 545 9000
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
