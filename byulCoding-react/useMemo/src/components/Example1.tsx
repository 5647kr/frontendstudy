import { useMemo, useState } from "react";

export default function Example1() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardCalculate = (hardNumber: number) => {
    console.log("어려운 계산!");
    for (let i = 0; i < 999999999; i++) {}
    return hardNumber + 10000;
  };
  const easyCalculate = (easyNumber: number) => {
    console.log("쉬운 계산!");
    return easyNumber + 1;
  };

  // const hardSum = hardCalculate(hardNumber);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);
  return (
    <>
      <h1>Example1 Component</h1>

      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />

      <span>+ 10000 = {hardSum}</span>

      <h1>Example1 Component</h1>

      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />

      <span>+ 1 = {easySum}</span>
    </>
  );
}
