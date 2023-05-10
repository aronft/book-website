import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const useModalStore = create<ModalState>((set, get) => ({
  isOpen: false,
  onClose: () => {
    set((state) => ({ ...state, isOpen: false }));
  },
  onOpen: () => {
    window.scrollTo(0, 0);
    set((state) => ({ ...state, isOpen: true }));
  },
}));
