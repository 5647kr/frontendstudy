# 📌 [not-found]

> **한 줄 요약**: 최상위에 `not-found` 파일을 만들 수 있고 하위에 생성시 `notFound` 함수를 호출해 사용한다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

App Router는 존재하지 않는 경로로 접근할 경우 자동으로 내장된 404 페이지를 렌더링하도록 기본 설정되어 있다.
하지만 디자인이나 커스텀 404 페이지를 원할 땐 루트 경로 바로 밑에 not-found.tsx파일을 직접 생성해주면 된다.

- not-found.tsx 파일은 App Router에서 404 페이지를 커스터마이징 할 때 사용하는 특수 파일이다.

### 2. [not-found.tsx 생성]

app 폴더 아래 `not-found.tsx` 파일을 생성하면 된다.

- not-found.tsx 파일은 내장된 404 페이지를 대체하는 커스텀 404 페이지 역할을 한다.

### 3. [하위 폴더에 추가]

not-found.tsx 파일은 루트 경로 뿐 아닌 라우트 세그먼트 폴더나 루으트 그룹 폴더 하위에도 생성할 수 있다.

```
📦post
 ┣ 📂[id]
 ┃ ┗ 📜page.tsx
 ┗ 📜not-found.tsx
```

위와 같이 폴더 구조를 형성하고 `post/1/comment`로 접속하면 post/not-found.tsx가 불러올거 같지만 root 경로에 있는 not-found.tsx가 보여지게 된다.

```
📦app
 ┣ 📂post
 ┣ 📜not-found.tsx <- 이게 보여짐
```

### 3. [하위 폴더에 있는 not-found 파일 사용하기]

컴포넌트 코드에서 notFound 함수를 호출하여 사용한다.

```
post/[id]/page.tsx

import { notFound } from "next/navigation";

if (id === "10") notFound();
```

post/10이 없는 페이지라고 가정하고 notFound 함수를 호출하면 해당 컴포넌트로 부터 가장 가까이 있는 not-found.tsx 파일을 호출해 렌더링되게 된다.

---

## 📂 구현 코드 파일

- 📄 [`page.tsx`](./src/app/post/[id]/page.tsx)
