import { useEffect, useRef, useState } from "react";

export default function Example3() {
  const [count, setCount] = useState(1);
  // 렌더링 횟수 출력하기

  // 무한루프에 걸림
  // const [renderCount, setRenderCount] = useState(1);
  // useEffect(() => {
  //   setRenderCount(renderCount + 1);
  // });

  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 수", renderCount.current);
  });

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}
