# 📌 [global-error]

> **한 줄 요약**: 완전 독립적인 404 페이지를 만들고 싶을 때 `global-not-found.tsx`를 생성하고 `html, body`태그를 사용해 작성하면 된다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

에러 바운더리 경계를 전체 영역에서 생성할 수 있는 파일이다.

```
<RootLayout>
  <ErrorBoundary fallback={<Error />}>
    <Page />
  </ErrorBoundary>
</RootLayout>
```

위와 같은 구조로 되어있다보니 RootLayout에서 발생하는 에러를 처리할 수 없다. 이때 사용하는것이 바로 global-error이다.

## 2. [global error]

global-loading 과 같이 html태그와 body태그를 포함해야 한다.

- 메타데이터가 필요할경우 그에 해당하는 title 태그 meta태그를 이용한다.

```
<title>전역 에러 발생</title>
<meta name="description" content="앱 전
```

---

## 📂 구현 코드 파일

- 📄 [`GlobalError.tsx`](./src/app/global-error.tsx)
