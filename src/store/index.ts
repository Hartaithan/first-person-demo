import create from "zustand";

interface IStore {
  shots: number;
  hits: number;
  overlay: boolean;
  shot: () => void;
  hit: () => void;
  reset: () => void;
  setOverlay: (state: boolean) => void;
}

const useStore = create<IStore>((set) => ({
  shots: 0,
  hits: 0,
  overlay: true,
  shot: () => set((state) => ({ shots: state.shots + 1 })),
  hit: () => set((state) => ({ hits: state.hits + 1 })),
  reset: () => set(() => ({ shots: 0, hits: 0 })),
  setOverlay: (state) => set(() => ({ overlay: state })),
}));

export default useStore;
