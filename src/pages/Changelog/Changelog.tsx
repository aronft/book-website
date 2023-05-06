import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import styles from "./Changelog.module.scss";

export const Changelog = () => {
  return (
    <>
      <HeroInfo title="Changelog">
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in
        some form.
      </HeroInfo>
      <section className={styles.changelog}>
        <div className={styles.changelog__content}>
          <div className={styles.changelog__version}>V.1</div>
          <p className={styles.changelog__description}>Initial Pages Webflow Template Release</p>
        </div>
      </section>
    </>
  );
};
