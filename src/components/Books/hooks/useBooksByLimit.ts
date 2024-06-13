import { useEffect, useState } from "react";
import { getBooksByLimit } from "../services/getBooksByLimit";
import { Book } from "../models/Book";

export const useBooksByLimit = (limit: number) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  getBooksByLimit(limit);
  useEffect(() => {
    const newBooks = getBooksByLimit(limit);
    setloading(false);
    setBooks(newBooks);
    if (newBooks.length === 0) {
      setError("No se encontraron registros");
    }
  }, [limit]);

  return { books, loading, error };
};
