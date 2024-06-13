import { Book } from "../../models/Book";
import { BookCard } from "../BookCard/BookCard";
import styles from "./BookList.module.scss";

interface BookListProps {
  books: Book[];
}
export const BookList = ({ books }: BookListProps) => {
  return (
    <section className={styles.books}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          description={book.description}
          imageSrc={book.image}
          length={book.length}
          pages={book.pages}
          price={book.price}
          tag="article"
          orientation="vertical"
          type={book.type}
          title={book.title}
          level="h2"
          backgroundVisible
          size="medium"
        />
      ))}
    </section>
  );
};
