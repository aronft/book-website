import { SectionTitle } from "@/components/ui/molecules/SectionTitle/SectionTitle";
import { Container } from "@/components/ui/objects/Container/Container";
import { Book } from "../../models/Book";
import { BookCard } from "../BookCard/BookCard";
import styles from "./AuthorBooksSection.module.scss";
import bookAtomicImage from "@/assets/images/books/book-atomic.png";
import bookTheDark from "@/assets/images/books/book-the-dark.png";

export const AuthorBooksSection = () => {
  const books: Book[] = [
    {
      title: "Atomic One’s",
      description:
        "Many variations of passages of Lorem Ipsum willing araise  alteration in some form.",
      image: bookAtomicImage,
      pages: 586,
      length: "10 Hours",
      price: 28.0,
      type: "print",
    },
    {
      title: "The Dark Light",
      description:
        "Many variations of passages of Lorem Ipsum willing araise  alteration in some form.",
      image: bookTheDark,
      pages: 586,
      length: "10 Hours",
      price: 28.0,
      type: "print",
    },
  ];

  return (
    <section className={styles["author-books"]}>
      <Container className={styles["author-books__content"]}>
        <SectionTitle color="primary" aligment="middle" separator>
          Author’s Book Includes
        </SectionTitle>
        <div className={styles["author-books__list"]}>
          {books.map((book, index) => (
            <BookCard
              key={index}
              description={book.description}
              title={book.title}
              imageSrc={book.image}
              pages={book.pages}
              price={book.price}
              length={book.length}
              type={book.type}
              orientation="horizontal"
              tag="section"
              level="h3"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
