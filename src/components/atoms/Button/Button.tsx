import React, { ReactNode } from "react";
import styles from "./Button.module.scss";
import * as classNames from "classnames";
interface Props {
  color: "primary" | "secondary";
  size: "small" | "medium";
  children: ReactNode;
}

export const Button = ({ color, size, children }: Props) => {
  return (
    <button
      className={classNames(
        styles.btn,
        styles[`btn--${color}`],
        styles[`btn--${size}`]
      )}
    >
      {children}
    </button>
  );
};
