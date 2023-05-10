import { PropsWithChildren, SyntheticEvent } from "react";
import styles from "./Input.module.scss";
interface InputProps {
  placeHolder: string;
  type: string;
  name: string;
  onChange: (event: SyntheticEvent) => void;
  value?: string;
}

export const Input = ({
  children,
  placeHolder,
  type,
  name,
  onChange,
  value,
}: PropsWithChildren<InputProps>) => {
  const paddingChildren = !children ? "" : styles["input-container--padding-left"];
  return (
    <div className={styles["input-container"]}>
      <div className={paddingChildren}>{children}</div>
      <input
        className={styles["form-control"]}
        type={type}
        placeholder={placeHolder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
