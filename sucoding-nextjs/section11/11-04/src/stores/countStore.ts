import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCountStore = create<CountState>()(
  immer((set) => ({
    count: 0,
    // immer 적용 전
    // increment: () => set((state) => ({ count: state.count + 1 })),
    // decrement: () => set((state) => ({ count: state.count - 1 })),
    // reset: () => set(() => ({ count: 0 })),

    // immer 적용 후
    increment: () =>
      set((state) => {
        state.count += 1;
      }),
    decrement: () =>
      set((state) => {
        state.count -= 1;
      }),
    reset: () =>
      set((state) => {
        state.count = 0;
      }),
  })),
);
