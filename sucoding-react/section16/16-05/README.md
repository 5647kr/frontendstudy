# 16-05. useFormStatus

<br />

## 📑 목차

1. [개념](#1-개념)
2. [리액트 19](#2-리액트-19)
3. [참고 파일](#3-참고-파일)

<br />

## 1. 개념

컴포넌트가 분리되어 있는 상황에서도 상위 Form 요소의 상태 정보를 하위 컴포넌트에서도 가져올 수 있는 훅이다.

```
const {pending, data, method, action} = useFormStatus()

pending: 폼이 제출되어 액션이 처리중(true, false)
data: 제출된 폼 데이터 객체에 대한 참조값
method: get 또는 post 중 현재 폼에서 사용중인 전송 방식을 나타냄
action: 현재 실행중인 액션 함수에 대한 참조값
```

## 2. 예제

```
import { useFormStatus } from "react-dom";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button({ children, ...props }: ButtonProps) {
  const { pending, data, method, action } = useFormStatus();
  console.log("pending", pending);
  console.log("data", data);
  console.log("method", method);
  console.log("action", action);
  console.log("======");
  return (
    <>
      <button {...props} disabled={pending}>
        {children}
      </button>
      {data && <p>Logging in with ID: {String(data.get("email"))}</p>}
    </>
  );
}
```

## 3. 참고 파일

- components/html/Button.tsx
