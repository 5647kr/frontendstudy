# 05-03. useState - 2

<br />

## 1. 개념

useState는 리액트의 함수형 컴포넌트에서 상태 데이터를 정의할 떄 사용하는 hook이다.

## 2. 타입 명시

초기값과 변경된 값의 타입이 동일한 경우 타입선언을 생략할 수 있지만 다를 경우엔 명시해주어야 한다.

```
import { useState } from "react";

export default function App() {
  const [state, setState] = useState<number | string>(0);

  const handleClick = () => {
    setState("10");
  };
  return (
    <div>
      <p>state: {state}</p>
      <button onClick={handleClick}>set to 10</button>
    </div>
  );
}

```

## 3. 참고 파일

- App.tsx
