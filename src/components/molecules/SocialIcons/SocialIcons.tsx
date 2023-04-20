import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Button, ButtonProps } from "../../atoms/Button/Button";
import styles from "./SocialIcons.module.scss";

interface SocialIcons extends Pick<ButtonProps, "color" | "type"> {
  iconColor: string;
}

export const SocialIcons = ({
  color = "primary",
  type = "outline",
  iconColor,
}: SocialIcons) => {
  return (
    <div className={styles["social-icons"]}>
      <Button color={color} size="icon" type={type}>
        <BsTwitter color={iconColor} size="21px" />
      </Button>
      <Button color={color} size="icon" type={type}>
        <FaFacebookF color={iconColor} size="21px" />
      </Button>
      <Button color={color} size="icon" type={type}>
        <FaLinkedinIn color={iconColor} size="21px" />
      </Button>
      <Button color={color} size="icon" type={type}>
        <FaInstagram color={iconColor} size="21px" />
      </Button>
    </div>
  );
};
