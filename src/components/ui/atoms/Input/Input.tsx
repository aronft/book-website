import { PropsWithChildren } from "react";
import styles from "./Input.module.scss";
interface InputProps {
  placeHolder: string;
  type: string;
}

export const Input = ({ children, placeHolder, type }: PropsWithChildren<InputProps>) => {
  return (
    <div className={styles["input-container"]}>
      {children}
      <input type={type} placeholder={placeHolder} />
    </div>
  );
};
