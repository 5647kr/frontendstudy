import { create } from "zustand";
import {
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface CountStore {
  count: number;
  increment: (amount: number, amount2: number) => void;
  decrement: () => void;
  reset: () => void;
}

export const useCountStore = create<CountStore>()(
  devtools(
    subscribeWithSelector(
      persist(
        immer((set) => ({
          count: 0,
          increment: async (amount: number, amount2: number) => {
            set((state) => {
              state.count += amount + amount2;
            });
          },
          decrement: () => set((state) => (state.count -= 1)),

          reset: () =>
            set((state) => {
              state.count = 0;
            }),
        })),
        {
          name: "count-storage",
          storage: createJSONStorage(() => sessionStorage),
        },
      ),
    ),
    {
      enabled: false,
    },
  ),
);
