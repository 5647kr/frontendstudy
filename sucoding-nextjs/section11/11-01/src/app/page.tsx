"use client";

import Count from "@/components/Count";
import CountOutside from "@/components/CountOutside";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Count count={count} setCount={setCount} />
      <CountOutside count={count} />
    </>
  );
}
