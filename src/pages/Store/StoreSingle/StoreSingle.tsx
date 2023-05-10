import { BookDetailed } from "@/components/Books/components/BookDetailed/BookDetailed";
import { Heading } from "@/components/ui/atoms/Heading/Heading";
import { Text } from "@/components/ui/atoms/Text/Text";
import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./StoreSingle.module.scss";
import { FeautersSection } from "@/components/common/FeaturesSection/FeautersSection";
import { useBooksById } from "@/components/Books/hooks/useBooksById";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/atoms/Input/Input";
import { Button } from "@/components/ui/atoms/Button";
import { IoCartOutline } from "react-icons/io5";
import { ShoppingCart } from "../components/ShoppingCart/ShoppingCart";
import { SyntheticEvent, useState } from "react";
import { useShoppingStore } from "../store/store";

export const StoreSingle = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useShoppingStore();

  const { book, loading, error } = useBooksById(params.id);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      quantity: { value: string };
    };
    if (target.quantity.value === "") {
      console.log("Error ");
    }
    if (book && quantity > 0) {
      addItem(book, quantity);
    }
  };

  const quantityChange = (event: SyntheticEvent) => {
    const target = event.target as typeof event.target & {
      value: string;
    };
    setQuantity(parseInt(target.value, 10));
  };

  return (
    <>
      <Container className={styles["store-single"]}>
        <section className={styles["section-book"]}>
          {book && (
            <BookDetailed
              image={book.image}
              title={book.title}
              type={book.type}
              dimensions={book.dimensions}
              language={book.language}
              isbn={book.isbn}
              pages={book.pages}
              publisher={book.publisher}
              description={book.description}
            >
              <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                  type="number"
                  placeHolder=""
                  name="quantity"
                  onChange={quantityChange}
                  value={`${quantity}`}
                ></Input>
                <Button color="secondary" colorText="primary" size="medium">
                  <IoCartOutline size={"21px"} />
                  Add to card
                </Button>
                <ShoppingCart></ShoppingCart>
              </form>
            </BookDetailed>
          )}
          <div className={styles["section-book__actions"]}>
            <Button type="fill" size="medium" color="primary" colorText="white">
              Product description
            </Button>
            <Button type="fill" size="medium" color="primary-light-alt" colorText="primary">
              aditional info
            </Button>
          </div>
        </section>
        <article className={styles["frequent-questions"]}>
          <div className={styles.question}>
            <Heading level="h2" size="medium">
              Do you offer discounts for education?
            </Heading>
            <Text tag="p" color="thertiary" size="xs">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, bypassed injected humour, or randomised words which
              don't look even slightly believable.
            </Text>
          </div>
          <div className={styles.question}>
            <Heading level="h2" size="medium">
              Is this book for me?
            </Heading>
            <Text tag="p" color="thertiary" size="xs">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, bypassed injected humour, or randomised words which
              don't look even slightly believable.
            </Text>
          </div>
        </article>
      </Container>
      <FeautersSection></FeautersSection>
    </>
  );
};
