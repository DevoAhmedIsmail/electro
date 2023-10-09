import { create } from "zustand";

type SideBarCartState = {
  isOpen: boolean;
};

type SideBarCartActions = {
  onOpen: () => void;
  onClose: () => void;
};
//   onOpen: () => set({ isOpen: true }),
//   onClose: () => set({ isOpen: false }),

const useSideBarCart = create<SideBarCartState & SideBarCartActions>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useSideBarCart;
