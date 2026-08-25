# 📌 [데이터 캐시 - 3 (revalidatePath + 서버 액션)]

> **한 줄 요약**: 캐싱 전략의 4가지

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [캐시 삭제]

데이터 캐시는 영속적이기 때문에 삭제하지 않는 한 계속 남아있게 된다. 이를 해결하기 위해 revalidatePath 함수를 사용한다.

이 함수는 nextjs 서버 함수로 서버 컴포넌트에서만 사용할 수 있다.
따라서 클라이언트에서 사용할시 서버 액션을 같이 사용해야한다.

서버 액션이란 클라이언트에서 함수처럼 호출하지만 실제 실행은 서버에서만 되는 함수를 말한다.

```
fetch("http://localhost:4000/random1", {
    cache: "no-store",
  });
```

이는 매번 Data Source에서 데이터를 매번 가져오게 된다.

### 2. [두번째 매개변수]

- page, layout을 설정할 수 ㅣㅇㅆ따.
  - page로 설정시 경로로 설정된 page.tsx, layout.tsx의 데이터 캐시가 삭제된다.
  - layout으로 설정 시 경로로 설정된 모든 경로의 데이터 캐시가 삭제된다.
    - /about, "layout"으로 설정시 about/layout.tsx, about/page.tsx, about/detail/layout.tsx, about/detail/page.tsx 모두 다 캐시가 삭제된다.

---

## 📂 구현 코드 파일

- 📄 [`page.tsx`](./src/app/page.tsx)
- 📄 [`about.tsx`](./src/app/about/page.tsx)

```

```
