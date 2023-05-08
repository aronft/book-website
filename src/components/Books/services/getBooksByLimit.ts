import { BOOKS } from "../data/books";

export const getBooksByLimit = (limit: number) => {
  if (limit === -1) {
    return BOOKS;
  }
  return BOOKS.filter((book, index) => index < limit);
};
