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
      <input className={styles["form-control"]} type={type} placeholder={placeHolder} />
    </div>
  );
};
