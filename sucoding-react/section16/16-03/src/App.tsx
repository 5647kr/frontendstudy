import { useActionState } from "react";

export default function App() {
  const [count, formAction, isPending] = useActionState(
    // 명시적으로 타입을 작성해줘야한다.
    async (count: number, formData: FormData) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // 기본적으로 문자열이기 때문에 숫자로 바꿔주어야 한다.
      const amount = Number(formData.get("amount"));
      return count + amount;
    },
    0,
  );
  return (
    <>
      <form action={formAction}>
        <h1>count: {count}</h1>
        <input type="text" name="amount" />
        <button type="submit" disabled={isPending} formAction={formAction}>
          증가
        </button>
        {isPending && <p>제출중...</p>}
      </form>
    </>
  );
}
