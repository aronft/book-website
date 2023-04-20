import { Heading } from "../../atoms/Heading/Heading";
import { Link } from "../../atoms/Link/Link";
import { Logo } from "../../atoms/Logo/Logo";
import { SocialIcons } from "../../molecules/SocialIcons/SocialIcons";
import { Container } from "../../objects/Container/Container";
import { UiList } from "../../objects/UiList/UiList";
import styles from "./Footer.module.scss";
import done from "@/assets/images/done.svg";
import stylesColors from "@/styles/settings/colors-map.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles["footer__section--left"]}>
          <Logo />
          <SocialIcons
            type="outline"
            color="secondary"
            iconColor={stylesColors.white}
          />
        </div>
        <div className={styles["footer__section"]}>
          <Heading level="h3" size="small" color="white">
            Explore
          </Heading>
          <UiList orientation="vertical">
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">Home</Link>
            </div>

            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">About Us</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">Services</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">Appointments</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">Blog</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">Contact Us</Link>
            </div>
          </UiList>
        </div>

        <div className={styles["footer__section"]}>
          <Heading level="h3" size="small" color="white">
            Utility Pages
          </Heading>
          <UiList orientation="vertical">
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">Start here</Link>
            </div>

            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">Style guide</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">404 not found</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">Password protected</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">Licenses</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="#">Changelog</Link>
            </div>
          </UiList>
        </div>
        <div className={styles["footer__section"]}>
          <Heading level="h3" size="small" color="white">
            Keep in Touch
          </Heading>
          <UiList orientation="vertical">
            <div className={styles["footer__company-info"]}>
              <strong className="text--white">Address:</strong>
              <span className="text--secondary-light">
                24A Kingston St, Los Vegas NC 28202, USA.
              </span>
            </div>
            <div className={styles["footer__company-info"]}>
              <strong className="text--white">Mail:</strong>
              <span className="text--secondary-light">support@doctors.com</span>
            </div>
            <div className={styles["footer__company-info"]}>
              <strong className="text--white">Phone:</strong>
              <span className="text--secondary-light">
                (+22) 123 - 4567 - 900
              </span>
            </div>
          </UiList>
        </div>
        <div className={styles["footer__caption"]}>
          <p>
            ©Drafted by <strong>Victorflow</strong> - Powered by
            <strong> Webflow</strong>
          </p>
        </div>
      </Container>
    </footer>
  );
};
