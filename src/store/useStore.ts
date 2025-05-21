import { create } from "zustand";

interface Store {
  number: number;
  string: string;
  array: string[];
  updateNumber: (value: number) => void;
  updateString: (value: string) => void;
  addToArray: (value: string) => void;
  removeFromArray: (index: number) => void;
}

export const useStore = create<Store>((set) => ({
  number: 0,
  string: "",
  array: [],

  updateNumber: (value) => set({ number: value }),
  updateString: (value) => set({ string: value }),
  addToArray: (value) => set((state) => ({ array: [...state.array, value] })),
  removeFromArray: (index) =>
    set((state) => ({
      array: state.array.filter((_, i) => i !== index),
    })),
}));
