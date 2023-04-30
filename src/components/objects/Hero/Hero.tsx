import styles from "./Hero.module.scss";
import { ReactNode } from "react";

interface HeroProps {
  tag: string;
  children: ReactNode;
}

export const Hero = ({ tag, children }: HeroProps) => {
  const Tag = tag;
  return <Tag className={styles.hero}>{children}</Tag>;
};
