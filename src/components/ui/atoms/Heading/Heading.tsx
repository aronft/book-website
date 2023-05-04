import classNames from "classnames";
import React from "react";
import styles from "./Heading.module.scss";

export interface HeadingProps {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "semi-large" | "large";
  color?: "primary" | "secondary" | "white";
  children: React.ReactNode;
}

export const Heading = ({
  level = "h1",
  size = "small",
  color = "primary",
  children,
}: HeadingProps) => {
  const Tag = level;
  return (
    <Tag
      className={classNames(
        styles.heading,
        styles[`heading--${size}`],
        styles[`heading--${color}`]
      )}
    >
      {children}
    </Tag>
  );
};
