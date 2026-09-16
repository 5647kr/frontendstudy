import { useState, useRef } from "react";

export default function Example1() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // console.log(countRef); // countRef.current

  console.log("렌더링...");

  const increaseState = () => {
    setCount((count) => count + 1);
  };
  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref: ", countRef.current);
  };
  return (
    <>
      <h1>count: {count}</h1>
      <h1>Ref: {countRef.current}</h1>
      <button onClick={increaseState}>state + 1</button>
      <button onClick={increaseRef}>ref + 1</button>
    </>
  );
}
