import { useEffect, useLayoutEffect, useState } from "react";

export default function Example1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);

  useLayoutEffect(() => {
    new Promise((r) => setTimeout(r, 3000));
    console.log("useLayoutEffect", count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Update</button>
    </>
  );
}
