import { useEffect, useState } from "react";
import { getBookById } from "../services/getBookById";
import { Book } from "../models/Book";

export const useBooksById = (id: string) => {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const newBook = getBookById(id);
    setLoading(false);
    if (newBook) {
      setBook(newBook);
    } else {
      setError("El libro no existe");
    }
  }, [id]);
  return { book, loading, error };
};
