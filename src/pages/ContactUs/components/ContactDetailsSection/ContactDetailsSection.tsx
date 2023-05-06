import { Container } from "@/components/ui/objects/Container/Container";
import { ContactForm } from "../ContactForm/ContactForm";
import { SectionTitle } from "@/components/ui/molecules/SectionTitle/SectionTitle";
import { Heading } from "@/components/ui/atoms/Heading/Heading";
import styles from "./ContactDetailsSection.module.scss";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";

export const ContactDetailsSection = () => {
  return (
    <section className={styles["contact-details"]}>
      <Container className={styles.content}>
        <div className={styles.content__left}>
          <SectionTitle separator aligment="left">
            Keep in Touch
          </SectionTitle>
          <p className={styles["contact-details__description"]}>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable.
          </p>
          <div className={styles["contact-details__types-contact"]}>
            <div className={styles.contact}>
              <div className={styles.contact__icon}>
                <BiHomeAlt />
              </div>
              <div className={styles.contact__info}>
                <Heading>Visit Us:</Heading>
                <p className={styles.contact__description}>No: 09a, Downtown, San Dieago, USA.</p>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.contact__icon}>
                <HiOutlineMail />
              </div>
              <div className={styles.contact__info}>
                <Heading>Drop Us:</Heading>
                <p className={styles.contact__description}>support@pages.com</p>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.contact__icon}>
                <TbPhoneCall />
              </div>
              <div className={styles.contact__info}>
                <Heading>Call Us:</Heading>
                <p className={styles.contact__description}>Call: 1-800-123-9999</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content__right}>
          <ContactForm></ContactForm>
        </div>
      </Container>
    </section>
  );
};
