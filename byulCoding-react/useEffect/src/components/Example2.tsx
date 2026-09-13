import { useState } from "react";
import Timer from "./Timer";

export default function Example2() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </>
  );
}
