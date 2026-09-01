"use client";

import { useCount } from "@/provider/CountProvider";

export default function CountOutside() {
  const { count } = useCount();
  return (
    <>
      <h1>Count Outside Display: {count}</h1>
    </>
  );
}
