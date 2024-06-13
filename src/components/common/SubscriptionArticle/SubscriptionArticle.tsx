import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./SubscriptionArticle.module.scss";
import { Heading, HeadingProps } from "@/components/ui/atoms/Heading/Heading";
import { Separator } from "@/components/ui/atoms/Separator/Separator";
import { Button } from "@/components/ui/atoms/Button";

interface SubscriptionArticleProps extends Pick<HeadingProps, "level"> {}

const SubscriptionArticle = ({ level }: SubscriptionArticleProps) => {
  return (
    <div className={styles["subscription-article"]}>
      <Container className={styles["subscription-article__content"]}>
        <div className={styles["content__info"]}>
          <Heading level={level} color="primary" size="semi-large">
            Read a free chapter
          </Heading>
          <Separator color="primary" size="medium" orientation="horizontal" />
          <p className={styles["subscription-article__description"]}>
            Making this the first true value generator on the Internet. It of over 200 Latin words,
            combined with a handful.
          </p>
        </div>
        <form action="" className={styles["subscription-article__form"]}>
          {/* <label htmlFor="email">Email</label> */}
          <input type="text" name="email" placeholder="Your email id..." />
          <Button color="primary" size="medium" colorText="white">
            Subscribe
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default SubscriptionArticle;
