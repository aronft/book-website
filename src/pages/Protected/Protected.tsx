import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import { Button } from "@/components/ui/atoms/Button";
import { SectionTitle } from "@/components/ui/molecules/SectionTitle/SectionTitle";
import { FiKey } from "react-icons/fi";
import styles from "./Protected.module.scss";
import { Input } from "@/components/ui/atoms/Input/Input";
import { Container } from "@/components/ui/objects/Container/Container";

export const Protected = () => {
  return (
    <>
      <HeroInfo title="Protected Page">
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in
        some form.
      </HeroInfo>
      <Container>
        <section className={styles.protected}>
          <div className={styles.protected__content}>
            <SectionTitle separator color="primary" aligment="middle">
              Password Protected
            </SectionTitle>
            <p className={styles.protected__description}>
              This page is password protected. If you are the website admin, or have access to this
              page, please type your password below.
            </p>
            <Input placeHolder="Enter your password" type="password">
              <FiKey />
            </Input>
            <Button color="secondary" size="medium" colorText="primary">
              Submit
            </Button>
          </div>
        </section>
      </Container>
    </>
  );
};
