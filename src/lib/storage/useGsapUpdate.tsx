import { create } from "zustand";

type Store = {
  dependency: number;
  update: () => void;
};

const useGsapUpdate = create<Store>()((set) => ({
  dependency: 1,
  update: () => set((state) => ({ dependency: Date.now()   })),
}));

export default useGsapUpdate