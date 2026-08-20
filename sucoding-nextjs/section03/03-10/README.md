# 📌 [라우트 전환하기 - useRouter]

> **한 줄 요약**: 폴더명 앞에 `_`를 붙여 일반폴더인 프라이빗 폴더로 만들 수 있다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

- 라우트를 전환하는 방법으론 `Link` 컴포넌트를 사용한다.
- Link 컴포넌트는 서버 컴포넌트와 클라이언트 컴포넌트 모두 사용이 가능하다.

- Link 컴포넌트와 정반대인 클라이언트 컴포넌트에서만 사용 가능한 `useRouter 훅`이 있다.

```
page.tsx

import { useRouter } from "next/navigation";

const router = useRouter();
```

### 2. [router 인스턴스]

router 인스턴스에는 다양한 기능을 제공한다.

- push: 매개변수로 전달된 경로로 라우트를 전환, 변경된 부분만 업데이트 한다.

```
  router.push("/about");
```

- replace: 매개변수로 전달된 경로로 라우트를 전환, 전환하는 과정 중 브라우저 히스토리에 기록을 남기지 않는다.

```
  router.replace("/about");
```

- back: 브라우저 뒤로가기와 같은 기능을 수행한다.

```
  router.back();
```

- forward: 브라우저 앞으로가기 같은 기능을 수행한다.

```
  router.forward();
```

- refresh: 현재 라우트에 대한 리소스를 다시 불러오는 메서드이다. 주로 서버 컴포넌트에서 데이터 패칭을 다시 해야할 때 사용한다.

```
  router.refresh();
```

- prefetch: 경로를 입력하면 해당 경로의 데이터를 미리 불러와서 패치한다.

```
  router.prefetch("/about);
```

> **한 줄 요약**: `router` 인스턴스에는 다양한 기능을 제공한다.

---

## 📂 구현 코드 파일

- 📄 [`page.tsx`](./src/app/page.tsx)
