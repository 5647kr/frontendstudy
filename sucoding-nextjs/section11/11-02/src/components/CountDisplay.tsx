"use client";

import { useCount } from "@/provider/CountProvider";

export default function CountDisplay() {
  const { count } = useCount();
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
