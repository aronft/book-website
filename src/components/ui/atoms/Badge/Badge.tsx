import React, { ReactNode } from "react";
import styles from "./Badge.module.scss";
import classNames from "classnames";

interface BadgeProps {
  color?: "secondary";
  badgeContent: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Badge = ({ color = "secondary", badgeContent, children, onClick }: BadgeProps) => {
  return (
    <span className={styles["badge-container"]} onClick={onClick}>
      {children}
      <span className={classNames(styles.badge, styles[`badge--${color}`])}>{badgeContent}</span>
    </span>
  );
};
