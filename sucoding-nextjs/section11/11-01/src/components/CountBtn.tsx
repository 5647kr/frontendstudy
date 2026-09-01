import { Dispatch, SetStateAction } from "react";

export default function CountBtn({
  setCount,
}: {
  setCount: Dispatch<SetStateAction<number>>;
}) {
  return (
    <>
      <button onClick={() => setCount((prev) => prev - 1)}>감소</button>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <button onClick={() => setCount(0)}>리셋</button>
    </>
  );
}
