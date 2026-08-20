# 📌 [중첩 동적 라우트]

> **한 줄 요약**: `devtools`를 활용해 개발모드에서 도구를 사용할 수 있다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [중첩 동적 라우트 정의 방식]

- post/[id]/comment/[id] 와 같이 첫 번째 동적 라우트 아래 중첩하여 폴더를 작성하면 된다.

### 2. [동적 라우드 주의 사항]

- 같은 세그먼트로 시작하는 경로에서는 동적 세그먼트를 구분하는 폴더의 식별자가 똑같으면 안된다.
- 즉 post/[id]/comment/[commentId]와 같이 대괄호 안 식별자가 달라야 한다.

> **한 줄 요약**: `대괄호`를 이용해 동적 라우트를 정의한다.

---

### 3. [동적 세그먼트의 값 가져오기]

- 동적 세그먼트의 값을 가져오는 것 역시 가능하다.
- 하위 동적 세그먼트의 경우엔 상위 동적 세그먼트의 값까지 가져올 수 있다.

> **한 줄 요약**: params라는 props를 사용해 세그먼트의 값을 가져온다.

```
app/post/[id]/comment/[commentId]/page.tsx

export default async function CommentDetailPage({
  params,
}: {
  params: Promise<{ id: string; commentId: string }>;
}) {
  const { id, commentId } = await params;
  return (
    <>
      <h1>CommentDetailPage: {id} / {commentId}</h1>
    </>
  );
}
```

- 클라이언트컴포넌트의 경우 useParams를 활용해 동적 세그먼트의 식별자를 작성해주면 된다.

**한 줄 요약**: useParams를 활용해 동적 세그먼트의 값을 가져온다.

```
app/post/[id]/comment/[commentId]/page.tsx

"use client";

import { useParams } from "next/navigation";

export default function CommentDetailPage() {
  const { id, commentId } = useParams();
  return (
    <>
      <h1>CommentDetailPage: {id} / {commentId}</h1>
    </>
  );
}
```

---

## 📂 구현 코드 파일

- 📄 [`CommentDetailPage.tsx`](./src/app/post/[id]/comment/[commentId]/page.tsx) - post/[id]/comment/[commentId]/page.tsx
