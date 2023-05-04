import React, { ReactNode } from "react";
import styles from "./Button.module.scss";
import * as classNames from "classnames";

export interface ButtonProps {
  color?: "primary" | "secondary" | "white";
  size?: "small" | "medium" | "large" | "icon";
  children: ReactNode;
  type?: "fill" | "outline";
  colorText?: "white";
  href?: string | undefined;
}

export const Button = ({
  color = "primary",
  size = "small",
  children,
  type = "fill",
  href,
  colorText = "white",
}: ButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        className={classNames(styles.btn, styles[`btn--link`], styles[`btn--${color}`])}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNames(
        styles.btn,
        styles[`btn--${color}`],
        styles[`btn--${size}`],
        styles[`btn--${type}`],
        styles[`text--${colorText}`]
      )}
    >
      {children}
    </button>
  );
};
