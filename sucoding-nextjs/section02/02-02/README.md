# 02-02. 서버 컴포넌트와 클라이언트 컴포넌트 작성해보기

<br />

## 📑 목차

1. [서버 컴포넌트](#1-차이점)
1. [클라이언트 컴포넌트](#2-클라이언트-컴포넌트)

<br />

## 1. 서버 컴포넌트

```
export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");

  const todo = await res.json();
  return (
    <>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
    </>
  );
}
```

### 서버 컴포넌트

- 이벤트 핸들러, 브라우저 전용 api를 사용할 순 없다.
- useState, useEffect와 같은 react hook을 사용할 수 없다.
- 데이터 패칭, 보안 로직, api 호출 담당

<br />

## 2. 클라이언트 컴포넌트

```
"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  return (
    <>
      count: {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  )
}
```

### 클라이언트 컴포넌트

- 이벤트 처리, 상태관리, 사용자 상호작용을 담당
