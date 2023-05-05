import { ReactNode } from "react";
import styles from "./Link.module.scss";
import classNames from "classnames";
import { Link as LinkRouterDom } from "react-router-dom";

interface LinkProps {
  color?: "primary" | "secondary" | "white";
  children: ReactNode;
  href: string;
}
export const Link = ({ href, children, color = "primary" }: LinkProps) => {
  return (
    <LinkRouterDom to={href} className={classNames(styles.link, styles[`link--${color}`])}>
      {children}
    </LinkRouterDom>
  );
};
