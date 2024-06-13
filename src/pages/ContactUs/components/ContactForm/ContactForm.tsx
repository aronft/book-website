import { Input } from "@/components/ui/atoms/Input/Input";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { TextArea } from "@/components/ui/atoms/TextArea/TextArea";
import { BsPencilSquare } from "react-icons/bs";
import styles from "./ContactForm.module.scss";
import { Button } from "@/components/ui/atoms/Button";
import { BsCheckLg } from "react-icons/bs";
import { Checkbox } from "@/components/ui/atoms/Checkbox/Checkbox";

export const ContactForm = () => {
  return (
    <form className={styles["contact-form"]}>
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
        Send Message
      </Button>
    </form>
  );
};
