import { Button } from "@/components/ui/atoms/Button";
import { Input } from "@/components/ui/atoms/Input/Input";
import { Text } from "@/components/ui/atoms/Text/Text";
import styles from "./ItemCart.module.scss";

export interface ItemCartProps {
  title: string;
  price: number;
}

export const ItemCart = ({ title, price, image }: ItemCartProps) => {
  const removeItem = () => {};
  return (
    <div className={styles["item-cart"]}>
      <img src={image} alt={title} />
      <div className={styles["item-cart__info"]}>
        <Text tag="p">{title}</Text>
        <Text tag="span">${price}USD</Text>
        <div className={styles["item-cart__actions"]}>
          <Button onClick={removeItem} type="link" colorText="primary" size="auto">
            Remove
          </Button>
        </div>
      </div>
      <Input type="text" placeHolder="" />
    </div>
  );
};
