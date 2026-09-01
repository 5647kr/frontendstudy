"use client";

import { useCount } from "@/provider/CountProvider";

export default function CountBtn() {
  const { setCount } = useCount();
  return (
    <>
      <button onClick={() => setCount((prev) => prev - 1)}>감소</button>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <button onClick={() => setCount(0)}>리셋</button>
    </>
  );
}
