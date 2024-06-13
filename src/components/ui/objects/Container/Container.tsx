import { ReactNode } from "react";
import styles from "./Container.module.scss";
import classNames from "classnames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};
