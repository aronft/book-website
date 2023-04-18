import classNames from "classnames";
import React from "react";
import styles from "./Heading.module.scss";

interface HeadingProps {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Heading = ({ level = "h1", size = "small" }: HeadingProps) => {
  const Tag = level;
  return (
    <Tag className={classNames(styles.heading, styles[`heading--${size}`])}>
      Heading
    </Tag>
  );
};
