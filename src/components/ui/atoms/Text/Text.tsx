import { PropsWithChildren } from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";

interface TextProps {
  tag: keyof JSX.IntrinsicElements;
  color?: "primary" | "secondary" | "white" | "secondary-light" | "thertiary";
  size?: "tiny" | "xxs" | "xs" | "sm" | "m" | "lg" | "xl";
  weight?: 400 | 500 | 600 | 700 | 800;
  fontFamily?: "primary" | "secondary";
}
export const Text = ({
  tag: Tag,
  fontFamily = "primary",
  children,
  size = "xs",
  color = "thertiary",
  weight = 400,
}: PropsWithChildren<TextProps>) => {
  return (
    <Tag
      className={classNames(
        styles.text,
        styles[`text-font-family--${fontFamily}`],
        styles[`text-weight--${weight}`],
        styles[`text-size--${size}`],
        styles[`text-color--${color}`]
      )}
    >
      {children}
    </Tag>
  );
};
