import { BsCheckLg } from "react-icons/bs";
import styles from "./Checkbox.module.scss";
interface CheckboxProps {
  text: string;
}
export const Checkbox = ({ text }: CheckboxProps) => {
  return (
    <div className={styles["checkbox-container"]}>
      <label className={styles["checkbox"]}>
        <input type="checkbox" name="" id="" />
        <BsCheckLg />
      </label>
      <p>{text}</p>
    </div>
  );
};
