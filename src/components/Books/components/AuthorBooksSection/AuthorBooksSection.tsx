import { SectionTitle } from "@/components/ui/molecules/SectionTitle/SectionTitle";
import { Container } from "@/components/ui/objects/Container/Container";
import { Book } from "../../models/Book";
import { BookCard } from "../BookCard/BookCard";
import styles from "./AuthorBooksSection.module.scss";
import bookAtomicImage from "@/assets/images/books/book-atomic.png";
import bookTheDark from "@/assets/images/books/book-the-dark.png";
import colerStyles from "@/styles/settings/colors-map.module.scss";
import { useBooksByLimit } from "../../hooks/useBooksByLimit";

interface AuthorBooksSectionProps {
  color?: string;
}

export const AuthorBooksSection = ({ color = colerStyles.white }: AuthorBooksSectionProps) => {
  const { books } = useBooksByLimit(2);

  return (
    <section className={styles["author-books"]} style={{ backgroundColor: color }}>
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
              id={book.id}
              size="small"
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
