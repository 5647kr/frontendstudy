"use client";

import { useContext, useState } from "react";
import { CountContext } from "../context/countContext";

export default function CountProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext value={{ count, setCount }}>{children}</CountContext>
    </>
  );
}

export const useCount = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("useCount는 CountProvider 내부에서만 사용할 수 있습니다.");
  }

  return context;
};
