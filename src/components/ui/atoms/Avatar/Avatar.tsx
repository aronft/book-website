import classNames from "classnames";
import styles from "./Avatar.module.scss";
interface AvatarProps {
  srcImage: string;
  size?: "small";
}
export const Avatar = ({ srcImage, size = "small" }: AvatarProps) => {
  return (
    <div className={classNames(styles.avatar, styles[`avatar--${size}`])}>
      <img src={srcImage} alt="" className={styles.avatar__image} />
    </div>
  );
};
