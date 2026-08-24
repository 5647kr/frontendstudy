// export const dynamic = "force-dynamic";
"use client";

import { useEffect, useState } from "react";

export default function TimePage() {
  // const date = new Date();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    window.setTimeout(() => setCurrentTime(new Date().toLocaleTimeString()), 0);
  }, []);
  return (
    <>
      {/* <h1>TimePage: {date.toLocaleTimeString()}</h1> */}
      <h1>TimePage: {currentTime}</h1>
    </>
  );
}
