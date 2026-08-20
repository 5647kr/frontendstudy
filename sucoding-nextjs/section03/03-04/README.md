# 📌 [동적 라우트]

> **한 줄 요약**: `devtools`를 활용해 개발모드에서 도구를 사용할 수 있다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

- URL 경로에 포하모디는 세그먼트의 일부를 동적으로 처리하여 페이지에 접근할 수 있도록 하는 방식이다.
- post/1, post/2와 같이 두번째 세그먼트가 동적으로 변경되어야 할때 사용한다.

### 2. [동적 라우드 정의 방식]

- 동적 세그먼트에 해당하는 폴더를 `대괄호`로 감싸서 정의하는 방식이다.
- 대괄호 안에는 동적으로 변경되는 값이 의미하는 바를 적어주면 된다.

> **한 줄 요약**: `대괄호`를 이용해 동적 라우트를 정의한다.

```
app/post/[id]/page.tsx
```

---

### 3. [동적 세그먼트의 값 가져오기]

- 동적 세그먼트의 값을 컴포넌트 내부에서 가져와 활용할 수 있다.
- 서버컴포넌트의 경우 params라는 props를 사용한다. 이는 기본적으로 전달되는 props이다.

> **한 줄 요약**: params라는 props를 사용해 세그먼트의 값을 가져온다.

```
app/post/[id]/page.tsx

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <h1>PostDetailPage: {id}</h1>
    </>
  );
}
```

- 클라이언트컴포넌트의 경우 useParams를 활용해 동적 세그먼트의 식별자를 작성해주면 된다.

**한 줄 요약**: useParams를 활용해 동적 세그먼트의 값을 가져온다.

```
app/post/[id]/page.tsx

"use client";

import { useParams } from "next/navigation";

export default function PostDetailPage() {
  const { id } = useParams();
  return (
    <>
      <h1>PostDetailPage: {id}</h1>
    </>
  );
}
```

---

## 📂 구현 코드 파일

- 📄 [`post/[id]/page.tsx`](./src/app/post/[id]/page.tsx) - post/[id]/page.tsx
