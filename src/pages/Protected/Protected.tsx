import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import { Button } from "@/components/ui/atoms/Button";
import { SectionTitle } from "@/components/ui/molecules/SectionTitle/SectionTitle";
import { FiKey } from "react-icons/fi";
import styles from "./Protected.module.scss";

export const Protected = () => {
  return (
    <>
      <HeroInfo title="Protected Page">
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in
        some form.
      </HeroInfo>

      <section className={styles.protected}>
        <div className={styles.protected__content}>
          <SectionTitle separator color="primary" aligment="middle">
            Password Protected
          </SectionTitle>
          <p className={styles.protected__description}>
            This page is password protected. If you are the website admin, or have access to this
            page, please type your password below.
          </p>
          <div className={styles["protected__password-container"]}>
            <FiKey className={styles["protected__password__icon"]} />
            <input type="password" placeholder="Enter your password" />
          </div>
          <Button color="secondary" size="medium">
            Submit
          </Button>
        </div>
      </section>
    </>
  );
};
