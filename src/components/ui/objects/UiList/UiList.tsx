import { ReactNode, Children, CSSProperties } from "react";
import styles from "./UiList.module.scss";
import classNames from "classnames";

interface UiListProps {
  orientation?: "horizontal" | "vertical";
  type?: "none" | "numeric" | "circle";
  space?: "medium" | "none";
  children: ReactNode;
}

export const UiList = ({
  orientation = "horizontal",
  children,
  type = "none",
  space = "medium",
}: UiListProps) => {
  return (
    <ul
      className={classNames(
        styles["ui-list"],
        styles[`ui-list--${orientation}`],
        styles[`ui-list--${type}`],
        styles[`ui-list-spacing--${space}`]
      )}
    >
      {Children.map(children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
};
