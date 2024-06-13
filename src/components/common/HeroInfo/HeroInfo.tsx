import { Heading } from "@/components/ui/atoms/Heading/Heading";
import { Separator } from "@/components/ui/atoms/Separator/Separator";
import { Container } from "@/components/ui/objects/Container/Container";
import { Hero } from "@/components/ui/objects/Hero/Hero";
import { PropsWithChildren } from "react";
import styles from "./HeroInfo.module.scss";

interface HeroInfoProps {
  title: string;
}

export const HeroInfo = ({ title, children }: PropsWithChildren<HeroInfoProps>) => {
  return (
    <Hero tag="section">
      <Container className={styles["hero-content"]}>
        <Heading color="white" size="extra-large" level="h1">
          {title}
        </Heading>
        <Separator size="medium" orientation="horizontal" color="secondary" />
        <p className={styles["hero-content__description"]}>{children}</p>
      </Container>
    </Hero>
  );
};
