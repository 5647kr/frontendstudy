import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CountStore {
  count: number;
  increment: (amount: number, amount2: number) => void;
  decrement: () => void;
  reset: () => void;
}

export const useCountStore = create<CountStore>()(
  persist(
    (set) => ({
      count: 0,
      increment: async (amount: number, amount2: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({ count: state.count + amount + amount2 }));
      },
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    { name: "count-storage", storage: createJSONStorage(() => sessionStorage) },
  ),
);
