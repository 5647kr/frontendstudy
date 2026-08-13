# 04-07. 이벤트 객체 배우기 - 2

<br />

## 📑 목차

1. [이벤트 객체](#1-이벤트-객체)
2. [참고 파일](#2-참고-파일)

<br />

## 1. 이벤트 객체

```
import Button from "./components/Button";

export default function App() {
  const handleClick = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("클릭함");
    console.log(message);
    console.log(event);
  };
  return (
    <>
      <Button handleClick={handleClick} />
    </>
  );
}

export default function Button({
  handleClick,
}: {
  handleClick: (
    message: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
}) {
  return (
    <>
      <button onClick={(event) => handleClick("event", event)}>클릭</button>
    </>
  );
}

```

## 2. 참고 파일

- App.tsx
- components/Button.tsx
