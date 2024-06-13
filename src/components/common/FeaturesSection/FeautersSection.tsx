import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./FeaturesSection.module.scss";
import { Heading, HeadingProps } from "@/components/ui/atoms/Heading/Heading";
import { Text } from "@/components/ui/atoms/Text/Text";
import { BsShieldCheck } from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import { AiOutlineThunderbolt } from "react-icons/ai";

interface FeaturesSectionProps extends Pick<HeadingProps, "level"> {}

export const FeautersSection = ({ level }: FeaturesSectionProps) => {
  return (
    <section className={styles["features-section"]}>
      <Container className={styles.features}>
        <div className={styles.feature}>
          <div className={styles["feature__icon-container"]}>
            <BsShieldCheck />
          </div>
          <Heading level={level} size="medium">
            Secure Payments
          </Heading>
          <Text tag="p" color="primary">
            There are many variations of passages of alteration in some form.
          </Text>
        </div>
        <div className={styles.feature}>
          <div className={styles["feature__icon-container"]}>
            <BiCube />
          </div>
          <Heading level={level} size="medium">
            Secure Payments
          </Heading>
          <Text tag="p" color="primary">
            There are many variations of passages of alteration in some form.
          </Text>
        </div>
        <div className={styles.feature}>
          <div className={styles["feature__icon-container"]}>
            <AiOutlineThunderbolt />
          </div>
          <Heading level={level} size="medium">
            Secure Payments
          </Heading>
          <Text tag="p" color="primary">
            There are many variations of passages of alteration in some form.
          </Text>
        </div>
      </Container>
    </section>
  );
};
