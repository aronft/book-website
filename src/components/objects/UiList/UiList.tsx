import { ReactNode, Children, CSSProperties } from "react";
import styles from "./UiList.module.scss";
import classNames from "classnames";

interface UiListProps {
  orientation?: "horizontal" | "vertical";
  children: ReactNode;
}

export const UiList = ({
  orientation = "horizontal",
  children,
}: UiListProps) => {
  return (
    <ul
      className={classNames(
        styles["ui-list"],
        styles[`ui-list--${orientation}`]
      )}
    >
      {Children.map(children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
};
