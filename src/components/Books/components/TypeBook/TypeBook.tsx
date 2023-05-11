import classNames from "classnames";
import { Book } from "../../models/Book";
import styles from "./TypeBook.module.scss";

import ImageHeadphones from "@/assets/images/headphones.svg";
import ViniloImage from "@/assets/images/vinillo.svg";

interface TypeBookProps extends Pick<Book, "type"> {
  className: string;
}
export const TypeBook = ({ type = "print", className }: TypeBookProps) => {
  const image = type === "digital" ? ImageHeadphones : ViniloImage;
  const classType = type === "vinilo" ? styles["type-book--full"] : "";
  if (type == "print") {
    return null;
  }
  return (
    <div className={classNames(className, styles["type-book"], classType)}>
      <img src={image} alt="Type Book image" />
    </div>
  );
};
