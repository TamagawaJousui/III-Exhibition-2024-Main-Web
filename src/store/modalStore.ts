import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  currentWorkId: string | null;
  onCloseCallback: (() => void) | null;
  openModal: (workId: string, onClose?: () => void) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  currentWorkId: null,
  onCloseCallback: null,
  openModal: (workId, onClose) => {
    console.log(`Opening modal for work: ${workId}`);

    // change the url
    // const url = new URL(window.location.href);
    // url.searchParams.set("workId", workId);
    // window.history.pushState({}, "", url);

    set({
      isModalOpen: true,
      currentWorkId: workId,
      onCloseCallback: onClose || null,
    });
  },
  closeModal: () => {
    console.log("Closing modal");

    // remain the url
    // const url = new URL(window.location.href);
    // url.searchParams.delete("workId");
    // window.history.pushState({}, "", url);

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
}));
