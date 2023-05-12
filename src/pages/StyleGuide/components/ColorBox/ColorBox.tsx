import { Text } from "@/components/ui/atoms/Text/Text";
import styles from "./ColorBox.module.scss";
import classNames from "classnames";

interface ColorBoxProps {
  title: string;
  color: "primary" | "secondary" | "grey";
}

export const ColorBox = ({ title, color }: ColorBoxProps) => {
  return (
    <div className={styles["box-container"]}>
      <div className={classNames(styles.box, styles[`box--${color}`])}></div>
      <Text tag="p" size="md" color="primary" fontFamily="secondary" weight={800}>
        {title}
      </Text>
    </div>
  );
};
