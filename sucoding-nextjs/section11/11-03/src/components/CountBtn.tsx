"use client";

import { decrement, increment, reset } from "@/store/slice/countSlice";
import { useDispatch } from "react-redux";

export default function CountBtn() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
    </>
  );
}
