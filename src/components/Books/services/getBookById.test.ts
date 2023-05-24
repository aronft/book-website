import { BOOKS } from "../data/books";
import { getBookById } from "./getBookById";

test("getBookById should return book with valid id", () => {
  const expectedBook = BOOKS[0];
  const book = getBookById(expectedBook.id);
  expect(book).toBe(null);
});
