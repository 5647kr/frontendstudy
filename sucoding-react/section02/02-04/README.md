# 02-04. 새로운 컴포넌트 만들기

<br />

## 📑 목차

1. [컴포넌트 규칙](#1-컴포넌트-규칙)
2. [컴포넌트 불러오기](#1-컴포넌트-불러오기)

<br />

## 1. 컴포넌트 규칙

파일명 첫 글자는 대문자여야 한다.

<br />

## 2. 컴포넌트 불러오기

아래와 같이 import를 사용해 컴포넌트를 불러온다.

```
import Header from "./Header";

export default function App() {
  return (
    <>
      <Header />
      <h1>App Component</h1>
    </>
  );
}
```
