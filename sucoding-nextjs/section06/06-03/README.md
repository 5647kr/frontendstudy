# 📌 [서버 컴포넌트에서 데이터 패치 - 에러 핸들링]

> **한 줄 요약**: error.tsx는 `클라이언트 컴포넌트`로 작성해야 하며, Fetch 시 `!response.ok`로 존재하지 않는 리소스까지 예외 처리를 해야 한다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

서버컴포넌트에서 에러가 발생하면 error.tsx로 에러를 처리하면 된다.
`error.tsx`는 클라이언트 컴포넌트로 선언해야 한다.

```code
// 핵심 코드 예시 작성
console.log("Hello, World!");
```

### 2. [2가지 props]

error.tsx는 두가지 props를 전달한다.

- error: 에러의 정보를 담고 있는 에러 객체
- reset: 다시 시도할 수 있게 재렌더링 해주는 함수

```
error.tsx

Error({error, reset}: {
  error: Error & { digest: number };
  reset: () => void;
})

<h1>Error: {error.message}</h1>
<button onClick={reset}>Retry</button>
```

### 3. [발생하지 않는 에러]

만약 도메인은 존재하는데 존재하지 않는 리소스를 접근하려고 하면 에러가 발생하지 않는다.

이때, HTTP 응답은 404 Not Found가 되지만 fetch 자체는 네트워크 에러가 아니기 때문에 자동으로 에러를 던지지 않는다. 따라서 따로 예외 처리를 해줘야 한다.

```
page.tsx

if (!response.ok) {
  throw new Error("Failed to Fetch");
}
```

## 📂 구현 코드 파일

- 📄 [`error.tsx`](./src/app/error.tsx)
- 📄 [`page.tsx`](./src/app/page.tsx)
