import { useCountStore } from "../store/countStore";

export default function CountOutside() {
  const count = useCountStore((state) => state.count);
  return (
    <>
      <h1>CountOutside: {count}</h1>
    </>
  );
}
