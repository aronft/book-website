import { CSSProperties } from "react";
import styles from "./CircleIcon.module.scss";
import classNames from "classnames";

interface CircleIconProps {
  color?: "primary" | "secondary";
  size: string;
}

export const CircleIcon = ({ color = "secondary", size }: CircleIconProps) => {
  return (
    <div
      className={classNames(styles.circle, styles[`circle--${color}`])}
      style={{ "--size": size } as CSSProperties}
    ></div>
  );
};
