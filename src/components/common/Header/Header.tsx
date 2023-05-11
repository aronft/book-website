import React from "react";
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

export const Header = () => {
  const { onOpen } = useModalStore();
  const { getTotalItems } = useShoppingStore();
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
          <Menu />
          <Badge badgeContent={`${getTotalItems()}`} color="secondary" onClick={onOpen}>
            <IoCartOutline size={"21px"} color={stylesColor.white} />
          </Badge>
          <Button color="secondary" size="small" href="/store" type="fill" colorText="primary">
            Order Today
          </Button>
        </div>
      </Container>
    </header>
  );
};
