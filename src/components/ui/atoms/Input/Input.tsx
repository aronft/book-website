import { PropsWithChildren, SyntheticEvent } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
interface InputProps {
  placeHolder: string;
  type: string;
  name: string;
  onChange?: (event: SyntheticEvent) => void;
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
  const paddingChildren = !children ? "" : styles["form-control--padding-left"];
  return (
    <div className={styles["input-container"]}>
      {children}
      <input
        className={classNames(styles["form-control"], paddingChildren)}
        type={type}
        placeholder={placeHolder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
