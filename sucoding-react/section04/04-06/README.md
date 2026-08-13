# 04-06. 이벤트 핸들러를 props로 전달하기

<br />

## 📑 목차

1. [전달 방법](#1-전달-방법)
2. [참고 파일](#2-참고-파일)

<br />

## 1. 전달 방법

아래와 같이 이벤트 전달하면 된다.

```
import { ButtonA, ButtonB, ButtonC } from "./components/Button";

export default function App() {
  const handleClickC = (message: string) => {
    console.log(message);
  };

  return (
    <>
      <ButtonA handleClickA={() => console.log("play MovieA")}>
        Play MovieA
      </ButtonA>
      <ButtonA handleClickA={() => console.log("Upload ImageA")}>
        Upload ImageA
      </ButtonA>

      {/* 매개변수 할당 */}
      <ButtonB
        handleClickB={(message: string) => console.log(message)}
        message="Play MovieB">
        Play MovieB
      </ButtonB>
      <ButtonB
        handleClickB={(message: string) => console.log(message)}
        message="Upload ImageB">
        Upload ImageB
      </ButtonB>

      {/* 별도 함수 적용 */}
      <ButtonC handleClickC={handleClickC} message="Play MovieC">
        Play MovieC
      </ButtonC>
      <ButtonC handleClickC={handleClickC} message="Upload ImageC">
        Upload ImageC
      </ButtonC>
    </>
  );
}


export function ButtonA({
  children,
  handleClickA,
}: {
  children: React.ReactNode;
  handleClickA: () => void;
}) {
  return (
    <div>
      <button onClick={handleClickA}>{children}</button>
    </div>
  );
}

export function ButtonB({
  children,
  message,
  handleClickB,
}: {
  children: React.ReactNode;
  message: string;
  handleClickB: (message: string) => void;
}) {
  return (
    <div>
      <button onClick={() => handleClickB(message)}>{children}</button>
    </div>
  );
}

export function ButtonC({
  children,
  message,
  handleClickC,
}: {
  children: React.ReactNode;
  message: string;
  handleClickC: (message: string) => void;
}) {
  return (
    <div>
      <button onClick={() => handleClickC(message)}>{children}</button>
    </div>
  );
}


```

## 2. 참고 파일

- App.tsx
- components/Button.tsx
