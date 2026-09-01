"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function CountOutside() {
  const count = useSelector((state: RootState) => state.count.value);
  return (
    <>
      <h1>Count Outside Display: {count}</h1>
    </>
  );
}
