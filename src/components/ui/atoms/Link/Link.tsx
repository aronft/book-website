import { ReactNode } from "react";
import styles from "./Link.module.scss";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import stylesColors from "@/styles/settings/colors-map.module.scss";
interface LinkProps {
  color?: "primary" | "secondary" | "white";
  children: ReactNode;
  href: string;
}
export const Link = ({ href, children, color = "primary" }: LinkProps) => {
  return (
    <NavLink
      to={href}
      className={classNames(styles.link, styles[`link--${color}`])}
      style={({ isActive }) => {
        return { color: isActive ? stylesColors.secondary : "" };
      }}
    >
      {children}
    </NavLink>
  );
};
