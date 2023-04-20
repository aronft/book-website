import styles from "./Logo.module.scss";
import logo from "@/assets/images/logo.png";
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo company" />
      <span>Pages</span>
    </div>
  );
};
