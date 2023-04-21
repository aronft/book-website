import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Button, ButtonProps } from "../../atoms/Button/Button";
import styles from "./SocialIcons.module.scss";

interface SocialIcons extends Pick<ButtonProps, "color" | "type"> {
  iconColor: string;
  position?: "header" | "footer";
}

export const SocialIcons = ({
  color = "primary",
  type = "outline",
  iconColor,
  position = "footer",
}: SocialIcons) => {
  return (
    <div className={styles["social-icons"]}>
      <Button color={color} size="icon" type={type}>
        <BsTwitter
          color={iconColor}
          size={position === "footer" ? "18px" : "16px"}
        />
      </Button>
      <Button color={color} size="icon" type={type}>
        <FaFacebookF
          color={iconColor}
          size={position === "footer" ? "18px" : "16px"}
        />
      </Button>
      <Button color={color} size="icon" type={type}>
        <FaLinkedinIn
          color={iconColor}
          size={position === "footer" ? "18px" : "16px"}
        />
      </Button>
      {position === "footer" && (
        <Button color={color} size="icon" type={type}>
          <FaInstagram
            color={iconColor}
            size={position === "footer" ? "18px" : "16px"}
          />
        </Button>
      )}
    </div>
  );
};
