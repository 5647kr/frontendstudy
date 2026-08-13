# 04-09. 이벤트 객체 배우기 - 3

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
    console.log("클릭함1");
    console.log(message);
    console.log(event);
    event.currentTarget.innerText = message;
    // (event.target as HTMLButtonElement).innerText = message;
  };
  return (
    <div>
      <Button handleClick={handleClick} />
    </div>
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
    <div>
      <button onClick={(event) => handleClick("hello", event)}>클릭</button>
    </div>
  );
}

```

## 2. 참고 파일

- App.tsx
- components/Button.tsx
