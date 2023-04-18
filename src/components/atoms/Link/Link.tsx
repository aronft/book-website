import { ReactNode } from "react";
import styles from "./Link.module.scss";
import classNames from "classnames";

interface LinkProps {
  color?: "primary" | "secondary" | "white";
  children: ReactNode;
  href: string;
}
export const Link = ({ href, children, color }: LinkProps) => {
  return (
    <a
      href={href}
      className={classNames(styles.link, styles[`link--${color}`])}
    >
      {children}
    </a>
  );
};
