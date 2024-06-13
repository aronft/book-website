import { Heading, HeadingProps } from "../../atoms/Heading/Heading";
import { PropsWithChildren } from "react";
import { Separator } from "../../atoms/Separator/Separator";
import styles from "./SectionTitle.module.scss";
import classNames from "classnames";

interface SectionTitleProps extends Pick<HeadingProps, "color"> {
  separator?: boolean;
  aligment: "middle" | "left";
}

export const SectionTitle = ({
  children,
  separator = false,
  aligment = "middle",
  color = "primary",
}: PropsWithChildren<SectionTitleProps>) => {
  return (
    <div className={classNames(styles["section-title"], styles[`section-title--${aligment}`])}>
      <Heading level="h2" size="semi-large" color={color}>
        {children}
      </Heading>
      {separator && <Separator orientation="horizontal" size="medium" color="secondary" />}
    </div>
  );
};
