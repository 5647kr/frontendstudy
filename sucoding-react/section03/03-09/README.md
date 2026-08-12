# 03-09. children

<br />

## 📑 목차

1. [기존 방법](#1-기존-방법)
2. [스프레드 연산자 활용](#2-스프레드-연산자-활용)
3. [참고 파일](#3-참고-파일)

<br />

## 1. 기존 방법

```
export default function App() {
  return (
    <>
      <Button />
    </>
  );
}


export defualt function Button() {
  return (
    <button>Login</button>
  )
}
```

위와 같을 경우 여러 컴포넌트에서 Button 컴포넌트의 텍스트는 항상 Login으로 고정된다.

## 2. props 사용

```
export default function App() {
  return (
    <>
      <Button text="Login" />
    </>
  );
}

function Button({ text }: { text: string }) {
  return (
    <button>{text}</button>
  )
}
```

props를 사용하는 방법 외 children 방법도 있다.

전개연산자로 작성한 코드는 아래 코드와 동일하다.

```
export default function App() {
  return (
    <>
      <Button2>
        Login
      </Button2>
    </>
  );
}

export default function Button2(props: { children: React.ReactNode }) {
  return (
    <button>{props.children}</button>
  )
}

// 전개 연산
export default function Button2({ children }: { children: React.ReactNode }) {
  return (
    <button>{children}</button>
  )
}
```

children에도 타입을 지정해줘야한다.

타입은 두가지 중 하나로 지정한다.

1. React.ReactElement: JSX 요소만 허용한다. 즉 문자열, 숫자, null등은 허용되지 않는다.
2. React.ReactNode: 문자열, 숫자, null을 포함한 JSX 까지 포함하여 이를 권장한다.

## 3. 참고 파일

- App.tsx
- components/ui/Button.tsx
- components/ui/Button2.tsx
