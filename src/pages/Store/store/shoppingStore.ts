import { create } from "zustand";
import { CartItem } from "../models/CartItem";
import { Book } from "@/components/Books/models/Book";

interface ShoppingStoreState {
  items: CartItem[];
  addItem: (book: Book, quantity: number) => void;
  removeItem: (book: Book) => void;
  getTotal: () => number;
  getTotalItems: () => number;
}

export const useShoppingStore = create<ShoppingStoreState>()((set, get) => ({
  items: [],
  addItem: (book: Book, quantity: number) => {
    const { items } = get();
    const cardItem = items.find((item) => item.book.id === book.id);
    if (cardItem) {
      const newSTtate = items.map((item) => {
        if (item.book.id === cardItem.book.id) {
          item.quantity++;
        }
        return item;
      });
      set((state) => ({ ...state, item: newSTtate }));
    } else {
      const cartItem = { book, quantity };
      set((state) => ({ ...state, items: [...state.items, cartItem] }));
    }
  },
  removeItem: (book: Book) => {
    const { items } = get();
    const newState = items.filter((item) => item.book.id !== book.id);
    set((state) => ({ ...state, items: newState }));
  },

  getTotal: () => {
    return get().items.reduce((total, item) => total + item.book.price * item.quantity, 0);
  },
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));
