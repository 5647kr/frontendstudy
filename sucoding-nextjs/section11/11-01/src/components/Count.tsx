import { Dispatch, SetStateAction } from "react";
import CountBtn from "./CountBtn";
import CountDisplay from "./CountDisplay";

export default function Count({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) {
  return (
    <>
      <CountDisplay count={count} />
      <CountBtn setCount={setCount} />
    </>
  );
}
