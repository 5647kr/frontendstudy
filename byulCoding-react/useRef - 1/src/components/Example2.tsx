import { useState, useRef } from "react";

export default function Example2() {
  const [render, setRender] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;
  // console.log(countRef); // countRef.current

  console.log("렌더링...");

  const doRender = () => {
    setRender(render + 1);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref: ", countRef.current);
  };

  const printResult = () => {
    console.log("ref", countRef)
    console.log("var", countVar)
  }
  return (
    <>
      <h1>var: {countVar}</h1>
      <h1>Ref: {countRef.current}</h1>
      <button onClick={doRender}>랜더</button>
      <button onClick={increaseVar}>var + 1</button>
      <button onClick={increaseRef}>ref + 1</button>
      <button onClick={printResult}>결과 출력</button>
    </>
  );
}
