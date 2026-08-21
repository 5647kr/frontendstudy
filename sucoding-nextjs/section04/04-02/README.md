# 📌 [global-not-found]

> **한 줄 요약**: 완전 독립적인 404 페이지를 만들고 싶을 때 `global-not-found.tsx`를 생성하고 `html, body`태그를 사용해 작성하면 된다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

not-found와 다르게 전역적인 범위로 동작하는 404 페이지이다.
not-found와 global-not-found의 차이는 `루트 레이아웃의 공유 여부`이다.

- not-found.tsx 파일은 Root layout의 children을 통해 보여지게 된다.

따라서 not-found.tsx 파일은 Root layout을 공유하기 때문에 header와 footer가 같이 나타나게 된다. 만약 header, footer없는 404 페이지를 원할 때 사용하는 것이 바로 `global-not-found`이다.

### 2. [global-not-found.tsx]

루트 레이아웃을 거치지 않고 완전히 독립적으로 렌더링되는 404 페이지를 만들 때 사용하는 파일이다.

- 해당 파일은 루트 레이아웃을 거치지 않기 때문에 html 태그와 body 태그를 포함한 형태로 코드를 작성해야한다.

### 3. [하위 폴더에 있는 not-found 파일 사용하기]

global-not-found.tsx가 있더라도 하위 컴포넌트에서 별도의 not-found를 사용하고 싶을 경우 코드에서 notFound 함수를 호출하여 사용한다.

```
post/[id]/page.tsx

import { notFound } from "next/navigation";

if (id === "10") notFound();
```

---

## 📂 구현 코드 파일

- 📄 [`GlobalNotFound.tsx`](./src/app/global-not-found.tsx)
