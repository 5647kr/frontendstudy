import { useCallback, useEffect, useState } from "react";

export default function Example1() {
  const [number, setNumber] = useState<number | string>(0);
  const [toggle, setToggle] = useState(true);

  const someFunc = useCallback(() => {
    console.log(`number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunc이 변경됨");
  }, [someFunc]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunc}>call Func</button>
    </>
  );
}
