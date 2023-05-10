import { Button } from "@/components/ui/atoms/Button";
import { Modal } from "@/components/ui/molecules/Modal/Modal";
import React, { useState } from "react";
import { ItemCart } from "../ItemCart/ItemCart";
import styles from "./ShoppingCart.module.scss";
import { Text } from "@/components/ui/atoms/Text/Text";

export const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} title="Shopping Cart" onClose={handleClose}>
        <div className={styles["shopping-cart"]}>
          <div className={styles["shopping-cart__items"]}>
            <ItemCart title="book" price={30} />
          </div>
          <hr />
          <div className={styles["shopping-cart__info"]}>
            <Text tag="p" color="primary" fontFamily="secondary" size="md">
              Sub-Total
            </Text>
            <Text tag="span" weight={800} color="primary">
              $60.00 usd
            </Text>
          </div>
          <div className={styles["shopping-cart__footer"]}>
            <Button color="secondary" colorText="primary">
              Continue to Checkout
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
