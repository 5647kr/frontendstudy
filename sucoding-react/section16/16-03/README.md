# 16-03. useActionState - 2

<br />

## 📑 목차

1. [개념](#1-개념)
2. [예제](#2-예제)
3. [참고 파일](#3-참고-파일)

<br />

## 1. 개념

formActionState hook의 첫 번째 매개변수로 작성하는 함수는 formAction이 발생했을 때 실행하는 함수

함수 자체는 formAction으로부터 전달되는 값들이 매개변수로 전달되게 된다.

첫번째는 현재 상태 값 두번째는 form 자체의 데이터이다.

이 데이터를 이용하면 비제어 컨트롤러 방식으로 폼 요소의 값을 가져올 수 있다.

```
const [state, formAction, isPending] = useActionState(fn, initialState);

폼의 액션 결과를 기반으로 상태를 업데이트할 수 있도록 도와주는 hook이다.

fn: 액션이 발생했을 때 실행할 함수(비동기 함수도 가능)
initialState: 상태의 초기값을 지정
state: 현재 상태값
formAction: 폼 액션 함수(action 속성에 활용)
isPending: 액션이 처리중 여부(true, false)
```

## 2. 예제

```
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

```

## 3. 참고 파일

- App.tsx
