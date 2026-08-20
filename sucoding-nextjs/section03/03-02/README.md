# 📌 [기본 라우트]

> **한 줄 요약**: `devtools`를 활용해 개발모드에서 도구를 사용할 수 있다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

- nextjs는 파일 시스템 기반 라우팅이라 한다. 이는 app 폴더 안에 폴더와 파일만으로 라우트 설정이 가능하기 떄문이다.

### 2. [경로 만들기]

- app폴더 안에 about 폴더를 만들고 그 안에 page.tsx파일을 생성한다.

```
파일은 page.tsx로 작성하지만 함수명은 가독성을 위해 폴더명Page로 작성한다.

app/about/page.tsx

export default function AboutPage() {
  return (
    <>
      <h1>AboutPage</h1>
    </>
  );
}

```

---

## 📂 구현 코드 파일

- 📄 [`about/page.tsx`](./src/app/about/page.tsx) - about/page.tsx
