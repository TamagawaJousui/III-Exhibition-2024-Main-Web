import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isOpen) => {
    console.log(
      `Modal state changing from ${useModalStore.getState().isModalOpen} to ${isOpen}`
    );
    set({ isModalOpen: isOpen });
  },
}));
