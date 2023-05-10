import { Button } from "@/components/ui/atoms/Button";
import { Input } from "@/components/ui/atoms/Input/Input";
import { Text } from "@/components/ui/atoms/Text/Text";
import styles from "./ItemCart.module.scss";
import { Book } from "@/components/Books/models/Book";

export interface ItemCartProps {
  book: Book;
  quantity: number;
}

export const ItemCart = ({ book, quantity }: ItemCartProps) => {
  const removeItem = () => {};
  return (
    <div className={styles["item-cart"]}>
      <img src={book.image} alt={book.title} />
      <div className={styles["item-cart__info"]}>
        <Text tag="p" color="primary" size="md" weight={800} fontFamily="secondary">
          {book.title}
        </Text>
        <Text tag="span">${book.price}USD</Text>
        <div className={styles["item-cart__actions"]}>
          <Button onClick={removeItem} type="link" colorText="primary" size="auto">
            Remove
          </Button>
        </div>
      </div>
      <Input type="text" placeHolder="" value={`${quantity}`} name="quantity" />
    </div>
  );
};
