import React, { ReactNode } from "react";
import styles from "./Button.module.scss";
import * as classNames from "classnames";

export interface ButtonProps {
  color?: "primary" | "secondary" | "white";
  size?: "small" | "medium" | "icon";
  children: ReactNode;
  type?: "fill" | "outline";
}

export const Button = ({
  color = "primary",
  size = "small",
  children,
  type = "fill",
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.btn,
        styles[`btn--${color}`],
        styles[`btn--${size}`],
        styles[`btn--${type}`]
      )}
    >
      {children}
    </button>
  );
};
