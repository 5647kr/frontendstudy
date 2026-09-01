"use client";

import { useCountStore } from "@/stores/countStore";

export default function CountOutside() {
  const count = useCountStore((state) => state.count);
  return (
    <>
      <h1>Count Outside Display: {count}</h1>
    </>
  );
}
