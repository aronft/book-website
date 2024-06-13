import { PropsWithChildren } from "react";
import styles from "./TextArea.module.scss";
import classNames from "classnames";

interface TextAreaProps {
  placeHolder: string;
  rows?: number;
}

export const TextArea = ({ children, placeHolder, rows = 5 }: PropsWithChildren<TextAreaProps>) => {
  const paddingChildren = !children ? "" : styles["form-control--padding-left"];
  return (
    <div className={styles["text-area-container"]}>
      {children}
      <textarea
        className={classNames(styles["form-control"], paddingChildren)}
        name=""
        id=""
        placeholder={placeHolder}
        rows={rows}
      ></textarea>
    </div>
  );
};
