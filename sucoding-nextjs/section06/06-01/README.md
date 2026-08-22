# 📌 [학습 주제]

> **한 줄 요약**: nextjs에서는 기본적으로 `Fetch API`를 사용한다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

React에서 데이터 패칭시에는 `Fetch API`, `Axios`, `TanStack Query`등 다양한 방법이 있다. 하지만 nextjs에서는 데이터 패칭이 좀 다르다.
nextjs는 서버 컴포넌트와 클라이언트 컴포넌트가 구분되어있어 어디서 패칭하느냐에 따라 방법이 다르다.

### 2. [서버 컴포넌트에서 데이터 패칭]

서버 컴포넌트는 `Fetch API` 사용할 경우 서버에서 먼저 데이터를 패칭한 뒤 그 결과를 html을 만들어 브라우저로 보낸다.

```
page.tsx

  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  const data = await response.json();
```

---

## 📂 구현 코드 파일

- 📄 [`page.tsx`](./src/app/page.tsx)
