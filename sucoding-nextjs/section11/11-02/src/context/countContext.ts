import { createContext, Dispatch, SetStateAction } from "react";

interface CountContextValue {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const CountContext = createContext<CountContextValue | null>(null);
