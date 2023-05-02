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

export const Header = () => {
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
          <Badge badgeContent={"01"} color="secondary">
            <IoCartOutline size={"21px"} color={stylesColor.white} />
          </Badge>
          <Button color="secondary" size="small">
            Order Today
          </Button>
        </div>
      </Container>
    </header>
  );
};
