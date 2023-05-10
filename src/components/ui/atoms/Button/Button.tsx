import React, { ReactNode } from "react";
import styles from "./Button.module.scss";
import * as classNames from "classnames";
import { Link } from "react-router-dom";

export interface ButtonProps {
  color?: "primary" | "secondary" | "white" | "primary-light-alt";
  size?: "small" | "medium" | "large" | "icon" | "auto";
  children: ReactNode;
  type?: "fill" | "outline" | "link";
  colorText?: "white" | "primary" | "secondary";
  href?: string | undefined;
  onClick?: () => void;
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
      <Link
        to={href}
        className={classNames(
          styles.btn,
          styles[`btn--${color}`],
          styles[`btn--${size}`],
          styles[`text--${colorText}`],
          styles[`btn--${type}`]
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNames(
        styles.btn,
        styles[`btn--${color}`],
        styles[`btn--${size}`],
        styles[`text--${colorText}`],
        styles[`btn--${type}`]
      )}
    >
      {children}
    </button>
  );
};
