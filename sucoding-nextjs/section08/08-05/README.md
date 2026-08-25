# 📌 [데이터 캐시 - 4 (revalidateTag + 서버 액션)]

> **한 줄 요약**: 캐싱 전략의 4가지

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [캐시 삭제]

revalidateTag라는 함수를 이용하여 데이터 캐시를 삭제할 수 있다.
이 함수는 같은 태그로 묶여있는 패치 캐시를 한 번에 무효화하는 서버 전용 함수이다.

하지만 해당 함수는 개발 환경과 배포 환경에서 각각 다르게 동작한다.

```
fetch("http://localhost:4000/random1", {
    cache: "no-store", enxt: {
      tags: ["random"]
    }
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
