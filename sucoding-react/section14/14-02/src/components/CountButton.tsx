import { useCountStore } from "../store/countStore";

export default function CountButton() {
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const reset = useCountStore((state) => state.reset);
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={() => increment(5, 10)}>증가</button>
    </>
  );
}
