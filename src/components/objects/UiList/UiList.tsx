import { ReactNode, Children, CSSProperties } from "react";
import styles from "./UiList.module.scss";
import classNames from "classnames";

interface UiListProps {
  orientation?: "horizontal" | "vertical";
  children: ReactNode;
  columnGap?: string;
  rowGap?: string;
}

export const UiList = ({
  orientation = "horizontal",
  children,
  columnGap = "0",
  rowGap = "0",
}: UiListProps) => {
  return (
    <ul
      className={classNames(
        styles["ui-list"],
        styles[`ui-list--${orientation}`]
      )}
      style={
        { "--column-gap": columnGap, "--row-gap": rowGap } as CSSProperties
      }
    >
      {Children.map(children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
};
