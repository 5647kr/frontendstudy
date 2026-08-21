# 📌 [loading]

> **한 줄 요약**: 완전 독립적인 404 페이지를 만들고 싶을 때 `global-not-found.tsx`를 생성하고 `html, body`태그를 사용해 작성하면 된다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

loading.tsx 파일을 같은 폴더 내에 있는 페이지 컴포넌트를 suspense 경계로 감싸는 역할을 하는 파일이다.
즉 페이지가 렌더링되기 전에 보여줄 대체 UI를 정의하는 파일이다.

## 2. [loading.tsx 파일 생성]

파일을 생성하게 되면 Next.js는 자동으로 page.tsx 파일에 작성되어 있는 컴포넌트를 suspense 컴포넌트로 감싸고 loading.tsx 파일은 fallback UI로써 사용하게 된다.

```
<RootLayout>
  <Suspense fallback={<Loading />}>
    <Page />
  </Suspense>
</RootLayout>
```

이와 같이 동작하게 된다.

## 3. [주의 사항]

loading.tsx는 page.tsx에 한해서만 작동한다 즉 RootLayout에서 지연이 발생할 경우 loading으로 감싸져 있지 않기 떄문에 처리하지 못한다.
따라서 layout.tsx에는 지연이 발생하는 코드 작성을 피해야한다.

- 또한 page.tsx 파일과 가장 가까운 loading.tsx파일로 감싸지게 된다.

---

## 📂 구현 코드 파일

- 📄 [`loading.tsx`](./src/app/loading.tsx)
- 📄 [`layout.tsx`](./src/app/layout.tsx)
