import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import { Container } from "@/components/ui/objects/Container/Container";
import { ColorBox } from "./components/ColorBox/ColorBox";
import { Heading } from "@/components/ui/atoms/Heading/Heading";
import styles from "./StyleGuide.module.scss";
import { Text } from "@/components/ui/atoms/Text/Text";
import { Button } from "@/components/ui/atoms/Button";
import { Quote } from "@/components/ui/atoms/Quote/Quote";
import { ContactForm } from "../ContactUs/components/ContactForm/ContactForm";
import { UiList } from "@/components/ui/objects/UiList/UiList";
import { Input } from "@/components/ui/atoms/Input/Input";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsCheckLg, BsPencilSquare, BsTelephone } from "react-icons/bs";
import { TextArea } from "@/components/ui/atoms/TextArea/TextArea";
import { Checkbox } from "@/components/ui/atoms/Checkbox/Checkbox";

export const StyleGuide = () => {
  return (
    <>
      <HeroInfo title="Style Guide">
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in
        some form.
      </HeroInfo>

      <Container className={styles["style-guide"]}>
        <section className={styles["style-guide__section-color"]}>
          <Heading level="h2" size="medium" color="primary">
            Color
          </Heading>
          <div className={styles.colors}>
            <ColorBox title="#1B3764" color="primary" />
            <ColorBox title="#FFCA42" color="secondary" />
            <ColorBox title="#F6F8FC" color="grey" />
          </div>
        </section>
        <section className={styles["style-guide__section-paragraph"]}>
          <Heading level="h2" size="medium" color="primary">
            Paragraph
          </Heading>
          <Text tag="p" color="thertiary">
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable.
          </Text>
        </section>
        <section className={styles["style-guide__section-button"]}>
          <Heading level="h2" size="medium" color="primary">
            Button
          </Heading>
          <div className={styles.buttons}>
            <div className={styles.buttons__row}>
              <Button color="secondary" colorText="primary" size="medium">
                Button Text
              </Button>
              <Button color="secondary" colorText="primary" size="medium" type="outline">
                Button Text
              </Button>
            </div>
            <div className={styles.buttons__row}>
              <Button color="secondary" colorText="primary" size="large">
                Button Text
              </Button>
              <Button color="secondary" colorText="primary" size="large" type="outline">
                Button Text
              </Button>
            </div>
          </div>
        </section>
        <section className={styles["style-guide__section-title"]}>
          <Heading level="h2" size="medium" color="primary">
            Title
          </Heading>
          <div className={styles.headings}>
            <Heading size="huge" color="primary">
              Headnig H1 Title
            </Heading>
            <Heading color="primary" size="extra-large">
              Heading H2 Title
            </Heading>
            <Heading color="primary" size="semi-large">
              Heading H3 Title
            </Heading>
            <Heading color="primary" size="medium">
              Heading H4 Title
            </Heading>
            <Heading color="primary" size="small">
              Heading H5 Title
            </Heading>
            <Heading color="primary" size="tiny">
              Heading H6 Title
            </Heading>
          </div>
        </section>

        <section className={styles["style-guide__section-list"]}>
          <Heading size="medium" level="h2">
            List
          </Heading>
          <UiList type="circle" orientation="vertical" space="none">
            <>It has roots in a piece of classical Latin literature from 45 BC,</>
            <>To generate Lorem Ipsum which looks reasonable</>
            <>The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet</>
            <>Be standard chunk of Lorem used since the 1500s</>
          </UiList>
          <UiList type="numeric" orientation="vertical" space="none">
            <>It has roots in a piece of classical Latin literature from 45 BC,</>
            <>To generate Lorem Ipsum which looks reasonable</>
            <>The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet</>
            <>Be standard chunk of Lorem used since the 1500s</>
          </UiList>
        </section>
        <section className={styles["style-guide__section--block-quote"]}>
          <Heading level="h2" size="medium">
            Block Quote
          </Heading>
          <Quote>
            “ We believe that bookstores are essential to a healthy culture. They’re where authors
            can connect with readers. new writers, where children get hooked on the thrill of
            reading that can last a lifetime.“
          </Quote>
        </section>
        <section className={styles["style-guide__section-input"]}>
          <Heading level="h2">Input Fields</Heading>
          <form action="" className={styles["form-grid"]}>
            <Input placeHolder="Name" type="text" name="name">
              <FiUser />
            </Input>

            <Input placeHolder="Email" type="email" name="email">
              <HiOutlineMail />
            </Input>

            <Input placeHolder="Phone" type="text" name="phone">
              <BsTelephone />
            </Input>

            <TextArea placeHolder="Message">
              <BsPencilSquare />
            </TextArea>

            <Checkbox text="Keep me up to date with news and offers from time to time by email" />

            <Button color="secondary" size="medium" colorText="primary">
              Get an Appointment
            </Button>
          </form>
        </section>
      </Container>
    </>
  );
};
