import create from "zustand";

interface IStore {
  shots: number;
  hits: number;
  shot: () => void;
  hit: () => void;
  reset: () => void;
}

const useStore = create<IStore>((set) => ({
  shots: 0,
  hits: 0,
  shot: () => set((state) => ({ shots: state.shots + 1 })),
  hit: () => set((state) => ({ hits: state.hits + 1 })),
  reset: () => set(() => ({ shots: 0, hits: 0 })),
}));

export default useStore;
