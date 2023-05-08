import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import noMatchImage from "@/assets/images/bg-404.png";
import { Heading } from "@/components/ui/atoms/Heading/Heading";
import { Button } from "@/components/ui/atoms/Button";
import styles from "./NoMatch.module.scss";
import noMatchVector from "@/assets/images/404-vector.svg";

export const NoMatch = () => {
  return (
    <>
      <HeroInfo title="Page Error">
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in
        some form.
      </HeroInfo>
      <div className={styles["no-match"]}>
        <img
          className={styles["no-match__bg"]}
          src={noMatchImage}
          alt="background with pencil and "
        />
        <div className={styles["no-match__content"]}>
          <img className={styles["no-match__vector"]} src={noMatchVector} alt="404 image" />
          <Heading color="primary" size="medium">
            Page not Found!!!
          </Heading>
          <p className={styles["no-match__description"]}>
            The page you are looking for doesn't exist. Please try searching for some other page, or
            return to the website's homepage to find what you're looking for.
          </p>
          <Button size="medium" type="fill" color="secondary" colorText="primary">
            Back to Home
          </Button>
        </div>
      </div>
    </>
  );
};
