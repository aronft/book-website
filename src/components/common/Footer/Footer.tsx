import { Heading } from "../../ui/atoms/Heading/Heading";
import { Link } from "../../ui/atoms/Link/Link";
import { Logo } from "../../ui/atoms/Logo/Logo";
import { SocialIcons } from "../../ui/molecules/SocialIcons/SocialIcons";
import { Container } from "../../ui/objects/Container/Container";
import { UiList } from "../../ui/objects/UiList/UiList";
import styles from "./Footer.module.scss";
import done from "@/assets/images/done.svg";
import stylesColors from "@/styles/settings/colors-map.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles["footer__section--left"]}>
          <Logo />
          <SocialIcons type="outline" color="secondary" iconColor={stylesColors.white} />
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
              <Link href="/">Home</Link>
            </div>

            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="/about-us">About Us</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="/services">Services</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="/appointments">Appointments</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="/articles">Blog</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="/contact-us">Contact Us</Link>
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
              <Link href="/start-here">Start here</Link>
            </div>

            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="/style-guide">Style guide</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="/404">404 not found</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="/protected">Password protected</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="/licenses">Licenses</Link>
            </div>
            <div className={styles["footer__group"]}>
              <div className={styles["group__icons"]}>
                <img src={done} alt="" />
                <img src={done} alt="" />
                <img src={done} alt="" />
              </div>
              <Link href="/changelog">Changelog</Link>
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
              <span className="text--secondary-light">(+22) 123 - 4567 - 900</span>
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
