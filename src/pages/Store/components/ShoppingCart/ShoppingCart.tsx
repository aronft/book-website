import { Button } from "@/components/ui/atoms/Button";
import { Modal } from "@/components/ui/molecules/Modal/Modal";
import React, { useState } from "react";
import { ItemCart } from "../ItemCart/ItemCart";
import styles from "./ShoppingCart.module.scss";
import { Text } from "@/components/ui/atoms/Text/Text";
import { useShoppingStore } from "../../store/shoppingStore";
import { BOOKS } from "@/components/Books/data/books";
import { useModalStore } from "@/store/modalStore";

export const ShoppingCart = () => {
  const { items, getTotal } = useShoppingStore();
  const { isOpen, onClose } = useModalStore();
  return (
    <>
      <Modal isOpen={isOpen} title="Shopping Cart" onClose={onClose}>
        <div className={styles["shopping-cart"]}>
          <div className={styles["shopping-cart__items"]}>
            {items.map((item, index) => (
              <ItemCart key={index} book={item.book} quantity={item.quantity} />
            ))}
          </div>
          <hr />
          <div className={styles["shopping-cart__info"]}>
            <Text tag="p" color="primary" fontFamily="secondary" size="md">
              Sub-Total
            </Text>
            <Text tag="span" weight={800} color="primary">
              {getTotal()} usd
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
