import { BOOKS } from "../data/books";
import { getBookById } from "./getBookById";

test("getBookById should return book with valid id", () => {
  const expectedBook = BOOKS[0];
  const book = getBookById(expectedBook.id);
  expect(book).toBe(expectedBook);
});

test("getBookById should return undefined with not exist id", () => {
  const book = getBookById("000000");
  expect(book).toBe(undefined);
});
