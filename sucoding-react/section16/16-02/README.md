# 16-02. useActionState

<br />

## 📑 목차

1. [개념](#1-json-server-활용)
2. [참고 파일](#2-참고-파일)

<br />

## 1. 개념

form 태그의 액션 속성을 직접적으로 사용하는 경우가 거의 없다. action 속성은 서버측에서 처리되는 기능이기 때문이다. 하지만 액션 속성을 활용할 수 있는 새로운 방식이 생겼다.

form 태그는 일반적으로 제출되면 브라우저가 페이지를 새로고침하면서 데이터를 서버로 전송하는 기본 동작을 수행한다.

하지만 아래의 예제처럼 액션 속성에 useActionState에서 반환되고 있는 formAction의 값을 form 태그의 action 값으로 넣어주게 되면 react가 폼 제출 이벤트를 가로채고 해당 액션 함수로 데이터를 전달한다.

그 결과 페이지가 새로고침되지 않고 클라이언트에서 상태가 갱신되는 방식으로 동작하게 된다.

`즉, 내부적으로는 폼 제출 이벤트는 발생하고 있지만 브라우저의 기본동작이 실행되지 않고 react가 form action함수를 통해 직접 처리하게 된다.`

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
```

## 2. 참고 파일

- App.tsx
