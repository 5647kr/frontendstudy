"use client";

import { useCountStore } from "@/stores/countStore";

export default function CountBtn() {
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const reset = useCountStore((state) => state.reset);
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={increment}>증가</button>
      <button onClick={reset}>리셋</button>
    </>
  );
}
