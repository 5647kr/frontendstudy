# 📌 [쿼리 스트링]

> **한 줄 요약**: `devtools`를 활용해 개발모드에서 도구를 사용할 수 있다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

- 쿼리 스트링은 url 뒤에 물음표 기호를 사용해 추가적인 데이터를 전달하는 방식이다.
- /post/[id]?lang=ko 처럼 lang=ko 데이터를 가져올 수 있다

### 2. [쿼리 스트링 가져오기]

- 동적 세그먼트의 값을 가져오는것과 비슷하게 가져오면 된다.
- 쿼리 스트링의 경우엔 searchParams를 이용한다.

> **한 줄 요약**: `searchParams`를 이용해 쿼리 스트링의 값을 가져올 수 있다.

```
app/post/[id]/page.tsx

export default async function PostDetailPage({
  searchParams,
}: {
  searchParams: Promise<{ lang: string }>;
}) {
  const { lang } = await searchParams;
  return (
    <>
      <h1>PostDetailPage: {lang}</h1>
    </>
  );
}
```

- 클라이언트 컴포넌트에서는 searchParams라는 훅을 사용하면 된다.
- searchParams의 get 메소드를 이용하여 키값을 가져올 수 있다.

> **한 줄 요약**: `searchParams`의 `get` 메소드를 이용해 가져올 수 있다.

```
app/post/[id]/comment/[commentId]/page.tsx

"use client";

import { useSearchParams } from "next/navigation";

export default function PostDetailPage() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  return (
    <>
      <h1>PostDetailPage: {lang}</h1>
    </>
  );
}
```

---

## 📂 구현 코드 파일

- 📄 [`PostDetailPage.tsx`](./src/app/post/[id]/page.tsx) - post/[id]/page.tsx
