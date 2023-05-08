import { BOOKS } from "../data/books";

export const getBookById = (id: string) => {
  const book = BOOKS.find((book) => book.id === id);
  return book;
};
