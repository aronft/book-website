import { Book } from "@/components/Books/models/Book";

export interface CartItem {
  book: Book;
  quantity: number;
}
