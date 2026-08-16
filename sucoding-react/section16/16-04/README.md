# 16-04. form action

<br />

## 📑 목차

1. [리액트 18](#1-리액트-18)
2. [리액트 19](#2-리액트-19)
3. [참고 파일](#3-참고-파일)

<br />

## 1. 리액트 18

리액트 18에서는 사용자가 입력한 값을 전달받아서 그 값으로 API를 호출하는 코드를 작성해야한다. 즉 onSubmit을 작성해야한다.

```
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const pw = formData.get("pw");

    // 로그인 api
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);

    console.log(`login success ${email}/${pw}`);
  };
  return (
    <>
      {/* 리액트 18 */}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" autoComplete="off" />
        <input type="password" name="pw" autoComplete="off" />
        <button type="submit" disabled={isLoading}>
          로그인
        </button>
      </form>
    </>
  );
}
```

## 2. form action

로그인 성공시 input의 값도 초기화 된다.
단, 자동으로 상태 값이나 로딩 상태를 제공하지 않기 때문에 기능이 필요한 경우 별도의 상태정의를 통해 상태값을 변경해주는 방식으로 작성해야 한다.

```
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email");
    const pw = formData.get("pw");

    // 로그인 api
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);

    console.log(`login success ${email}/${pw}`);
  };
  return (
    <>
      {/* 리액트 18 */}
      <form action={handleSubmit}>
        <input type="email" name="email" autoComplete="off" />
        <input type="password" name="pw" autoComplete="off" />
        <button type="submit" disabled={isLoading}>
          로그인
        </button>
      </form>
    </>
  );
}
```

## 정리
useActionState Hook은 상태 및 진행상태까지 함께 관리하고 싶을 때 유용하고 액션 속성에 함수만 할당하는 방식은 단순한 작업을 빠르게 처리하고 싶을 때 유용하다.

## 3. 참고 파일

- App.tsx
