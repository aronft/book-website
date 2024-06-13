import React, { useRef, useState } from "react";
import { Container } from "@/components/ui/objects/Container/Container";
import { SocialIcons } from "@/components/ui/molecules/SocialIcons/SocialIcons";
import stylesColors from "@/styles/settings/colors-map.module.scss";
import styles from "./Header.module.scss";
import { Logo } from "@/components/ui/atoms/Logo/Logo";
import { Menu } from "../Menu/Menu";
import { Button } from "@/components/ui/atoms/Button";
import { IoCartOutline } from "react-icons/io5";
import stylesColor from "@/styles/settings/colors-map.module.scss";
import { Badge } from "@/components/ui/atoms/Badge/Badge";
import { useModalStore } from "@/store/modalStore";
import { useShoppingStore } from "@/pages/Store/store/shoppingStore";
import { AiOutlineMenu } from "react-icons/ai";
import classNames from "classnames";

export const Header = () => {
  const { onOpen } = useModalStore();
  const { getTotalItems } = useShoppingStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles["header__left"]}>
          <Logo />
          <SocialIcons
            position="header"
            color="white"
            type="fill"
            iconColor={stylesColors.primary}
          />
        </div>
        <div className={styles["header__right"]}>
          <Menu className={classNames(styles["menu"], isOpen && styles["active"])} />
          <Badge badgeContent={`${getTotalItems()}`} color="secondary" onClick={onOpen}>
            <IoCartOutline size={"21px"} color={stylesColor.white} />
          </Badge>
          <Button color="secondary" type="fill" colorText="white" onClick={handleMenu}>
            <AiOutlineMenu size={25} />
          </Button>
          <Button color="secondary" size="small" href="/contact-us" type="fill" colorText="primary">
            Order Today
          </Button>
        </div>
      </Container>
    </header>
  );
};
