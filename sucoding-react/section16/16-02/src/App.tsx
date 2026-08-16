import { useActionState } from "react";

export default function App() {
  const [count, formAction, isPending] = useActionState(async (count) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return count + 1;
  }, 0);
  return (
    <>
      <form action={formAction}>
        <h1>count: {count}</h1>
        <button type="submit">증가</button>
        {isPending && <p>제출중...</p>}
      </form>
    </>
  );
}
