# 04-07. 이벤트 객체 배우기 - 1

<br />

## 📑 목차

1. [이벤트 객체](#1-이벤트-객체)
2. [참고 파일](#2-참고-파일)

<br />

## 1. 이벤트 객체

이벤트가 발생했을 때 브라우저가 자동으로 생성하여 이벤트 핸들러 함수에 전달하는 객체이다.

이 객체에는 이벤트와 관련된 다양한 정보를 포함하고 있다. 이는 react가 암묵적으로 이벤트 객체를 전달하고 있다.

```
export default function App() {
  const handleClickA = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("click1");
    console.log(event);
  };

  const handleClickB = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log(message);
    console.log(event);
  };

  return (
    <>
      <button onClick={handleClickA}>클릭1</button>
      <button onClick={(event) => handleClickB("click2", event)}>클릭2</button>
    </>
  );
}
```

## 2. 참고 파일

- App.tsx
