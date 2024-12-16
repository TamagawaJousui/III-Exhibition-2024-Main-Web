import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  currentWorkId: string | null;
  onCloseCallback: (() => void) | null;
  openModal: (workId: string, onClose?: () => void) => void;
  closeModal: () => void;

  isGalleryModalOpen: boolean;
  openGalleryModal: () => void;
  closeGalleryModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  currentWorkId: null,
  onCloseCallback: null,
  openModal: (workId, onClose) => {
    console.log(`Opening modal for work: ${workId}`);

    set({
      isModalOpen: true,
      currentWorkId: workId,
      onCloseCallback: onClose || null,
    });
  },
  closeModal: () => {
    console.log("Closing modal");

    set((state) => {
      if (state.onCloseCallback) {
        state.onCloseCallback();
      }

      return {
        isModalOpen: false,
        currentWorkId: null,
        onCloseCallback: null,
      };
    });
  },

  isGalleryModalOpen: false,
  openGalleryModal: () => {
    console.log("Opening gallery modal");
    set({ isGalleryModalOpen: true });
  },
  closeGalleryModal: () => {
    console.log("Closing gallery modal");
    set({ isGalleryModalOpen: false });
  },
}));
