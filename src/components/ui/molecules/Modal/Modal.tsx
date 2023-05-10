import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Modal.module.scss";
import { Text } from "../../atoms/Text/Text";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const Modal = ({ isOpen, onClose, children, title }: PropsWithChildren<ModalProps>) => {
  const portalElement = document.getElementById("modal-root");
  console.log(portalElement);
  if (!portalElement) {
    return null;
  }
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles["modal-overlay"]} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <Text size="xl" tag="p" color="primary" weight={800} fontFamily="secondary">
            {title}
          </Text>
          <AiOutlineClose onClick={onClose} />
        </div>
        <div>{children}</div>
      </div>
    </>,

    portalElement
  );
};
