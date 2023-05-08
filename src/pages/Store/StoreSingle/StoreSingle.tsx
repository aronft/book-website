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

export const StoreSingle = () => {
  const params = useParams();
  const { book, loading, error } = useBooksById(params.id);

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
              <div className={styles.form}>
                <Input type="number" placeHolder=""></Input>
                <Button color="secondary" colorText="primary" size="medium">
                  <IoCartOutline size={"21px"} />
                  Add to card
                </Button>
              </div>
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
