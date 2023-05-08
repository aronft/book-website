import { Input } from "@/components/ui/atoms/Input/Input";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { TextArea } from "@/components/ui/atoms/TextArea/TextArea";
import { BsPencilSquare } from "react-icons/bs";
import styles from "./ContactForm.module.scss";
import { Button } from "@/components/ui/atoms/Button";
import { BsCheckLg } from "react-icons/bs";

export const ContactForm = () => {
  return (
    <form className={styles["contact-form"]}>
      <Input placeHolder="Name" type="text">
        <FiUser />
      </Input>

      <Input placeHolder="Email" type="email">
        <HiOutlineMail />
      </Input>

      <Input placeHolder="Phone" type="text">
        <BsTelephone />
      </Input>

      <TextArea placeHolder="Message">
        <BsPencilSquare />
      </TextArea>

      <div className={styles["contact-form__agree"]}>
        <label className={styles["checkbox"]}>
          <input type="checkbox" name="" id="" />
          <BsCheckLg />
        </label>
        <p>Keep me up to date with news and offers from time to time by email</p>
      </div>

      <Button color="secondary" size="medium" colorText="primary">
        Send Message
      </Button>
    </form>
  );
};
