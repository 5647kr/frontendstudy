# 04-04. 이벤트 핸들러에서 props 읽기

<br />

## 📑 목차

1. [전달 방법](#1-전달-방법)
2. [참고 파일](#2-참고-파일)

<br />

## 1. 전달 방법

아래와 같이 이벤트 전달하면 된다.

```
export default function Button({
message,
children,
}: {
message: string;
children: React.ReactNode;
}) {
const handleClick = () => console.log(message);
return (
<>
<button onClick={handleClick}>{children}</button>
</>
);
}

```

## 2. 참고 파일

- App.tsx
- components/Button.tsx
