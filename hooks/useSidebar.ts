import { create } from "zustand";

type SideBarState = {
  isOpen: boolean;
};

type SideBarActions = {
  onOpen: () => void;
  onClose: () => void;
};
//   onOpen: () => set({ isOpen: true }),
//   onClose: () => set({ isOpen: false }),

const useSideBar = create<SideBarState & SideBarActions>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useSideBar;
