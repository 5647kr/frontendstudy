# 📌 [error]

> **한 줄 요약**: 완전 독립적인 404 페이지를 만들고 싶을 때 `global-not-found.tsx`를 생성하고 `html, body`태그를 사용해 작성하면 된다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

error는 에러를 처리하고 사용자에게 대체 UI를 표시할 수 있게 해주는 파일이다.
loading.tsx와 같다.

```
<RootLayout>
  <ErrorBoundary fallback={<Error />}>
    <Page />
  </ErrorBoundary>
</RootLayout>
```

위와 같은 구조가 되며, error.tsx는 클라이언트 컴포넌트라고 선언해주어야한다.

## 2. [error props]

error.tsx는 error라는 객체와 reset이란 함수를 props로 받는다.

- error에 대한 객체에는 에러에 대한 정보가 담겨 있다.
- reset 함수는 에러가 발생한 라우트 경로를 다시 호출해주는 역할을 한다.

에러가 발생하는 컴포넌트가 클라이언트 컴포넌트여야 한다는 조건이 있다.

## 3. [폴더 사용]

이러한 error.tsx또한 그룹 폴더나 라우트 세그먼트 파일에서도 사용할 수 있다.

---

## 📂 구현 코드 파일

- 📄 [`error.tsx`](./src/app/error.tsx)
