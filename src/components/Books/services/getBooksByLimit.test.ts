import { BOOKS } from "../data/books";
import { getBooksByLimit } from "./getBooksByLimit";

test("getBooksByLimit should return all books with -1 argument", () => {
  const expectedLength = BOOKS.length;
  const books = getBooksByLimit(-1);
  expect(books.length).toBe(expectedLength);
});

test("getBooksByLimit should return the limit sended if has more books", () => {
  const limit = 2;
  const books = getBooksByLimit(limit);
  expect(books.length).toBe(limit);
});

test("getBooksByLimit should return empty array if no has data", () => {
  const books = getBooksByLimit(0);
  expect(books.length).toBe(0);
});
