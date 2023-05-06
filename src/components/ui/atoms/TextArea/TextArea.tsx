import { PropsWithChildren } from "react";
import styles from "./TextArea.module.scss";

interface TextAreaProps {
  placeHolder: string;
  rows?: number;
}

export const TextArea = ({ children, placeHolder, rows = 5 }: PropsWithChildren<TextAreaProps>) => {
  return (
    <div className={styles["text-area-container"]}>
      {children}
      <textarea
        className={styles["form-control"]}
        name=""
        id=""
        placeholder={placeHolder}
        rows={rows}
      ></textarea>
    </div>
  );
};
