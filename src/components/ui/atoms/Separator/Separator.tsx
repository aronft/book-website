import classNames from "classnames";
import styles from "./Separator.module.scss";

interface SeparatorProps {
  size?: "small" | "medium" | "large";
  orientation?: "vertical" | "horizontal";
  color?: "primary" | "secondary";
}

export const Separator = ({
  size = "medium",
  orientation = "vertical",
  color = "secondary",
}: SeparatorProps) => {
  return (
    <div
      className={classNames(
        styles.separator,
        styles[`separator--${size}`],
        styles[`separator--${orientation}`],
        styles[`separator--${color}`]
      )}
    ></div>
  );
};
